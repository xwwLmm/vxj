// https://github.com/fengyuanchen/vue-qrcode/blob/master/src/index.js

import QRCode from 'qrcode/build/qrcode'

export default {
  name: 'Xqrcode',
  props: {
    value: String,
    width: {
      type: Number,
      default: 80
    },
    height: {
      type: Number,
      default: 80
    },
    /**
     * The options for the QR code generator.
     * {@link https://github.com/soldair/node-qrcode#qr-code-options}
     */
    options: Object,
    tag: {
      type: String,
      default: 'canvas'
    }
  },
  watch: {
    $props: {
      deep: true,
      immediate: true,

      /**
       * Update the QR code when props changed.
       */
      handler() {
        if (this.$el) {
          this.generate()
        }
      }
    }
  },
  render(createElement) {
    return createElement(this.tag, this.$slots.default)
  },
  mounted() {
    this.generate()
  },
  methods: {
    generate() {

      const { options, tag, width, height } = this
      const value = String(this.value)
      const $options = Object.assign({width, height}, options)

      if (tag === 'canvas') {
        QRCode.toCanvas(this.$el, value, $options, (error) => {
          if (error) {
            throw error
          }
        })
      } else if (tag === 'img') {
        QRCode.toDataURL(value, $options, (error, url) => {
          if (error) {
            throw error
          }

          this.$el.src = url
        })
      } else {
        QRCode.toString(value, $options, (error, string) => {
          if (error) {
            throw error
          }

          this.$el.innerHTML = string
        })
      }
    }
  }
}