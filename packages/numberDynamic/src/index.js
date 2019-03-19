const randomText = function () {
  const randomInteger = function (num, noZero) {
    let output = ''
    for (let i = 0; i < num; i++) {
      output += noZero ? Math.ceil(Math.random() * 9) : Math.floor(Math.random() * 10)
    }
    return output
  }
  const randomDecimal = function (integerNum, decimalNum) {
    let output = randomInteger(integerNum)
    decimalNum == null || (output += '.' + randomInteger(decimalNum))
    return output
  }
  const DEFAULT_OPTIONS = {
    totalDelay: 1500,
    intervalDelay: 15
  }

  return function (el, text, totalDelay, intervalDelay, random) {

    totalDelay == null && (totalDelay = DEFAULT_OPTIONS.totalDelay)
    intervalDelay == null && (intervalDelay = DEFAULT_OPTIONS.intervalDelay)

    const len = text.length

    random = random || (function () {
      const pointIndex = text.indexOf('.')
      return function () {
        return pointIndex === -1 ? randomInteger(len) : randomDecimal(pointIndex, len - pointIndex - 1)
      }
    }())

    const intervalStart = +new Date()
    let i = 0

    this.intervalId = setInterval(function () {
      const duration = +new Date() - intervalStart

      if (duration >= totalDelay) {
        clearInterval(this.intervalId)
        return (el.innerText = text)
      }

      let randomText = random.call(text, text)
      const index = len - i + 1

      randomText == null && (randomText = '')

      randomText = randomText.toString().substr(0, index) + text.substr(index)

      duration > totalDelay / len * i && i++

      el.innerText = randomText
    }, intervalDelay)

    return this
  }
}

export default {
  name: 'XNumberDynamic',
  props: {
    number: Number,
    totalDelay: {
      type: Number,
      default: 1500
    },
    intervalDelay: {
      type: Number,
      default: 15
    }
  },
  data() {
    return {
      intervalId: '',
      random: randomText()
    }
  },
  render(createElement) {
    return createElement('span', this.$slots.default)
  },
  mounted() {
    this.generate()
  },
  watch: {
    number() {
      this.generate()
    }
  },
  methods: {
    generate() {
      clearInterval(this.intervalId)
      this.random(this.$el, this.number + '', this.totalDelay, this.intervalDelay)
    }
  },
  beforeDestroy() {
    clearInterval(this.intervalId)
  }
}