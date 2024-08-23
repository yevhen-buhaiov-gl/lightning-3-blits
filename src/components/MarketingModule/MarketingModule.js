import Blits from '@lightningjs/blits'
import FastImage from "../image/FastImage.js";

export default Blits.Component('MarketingModule', {
  components: {
    FastImage,
  },
  template: `
    <Element :alpha.transition="{value: $alpha, duration: 500}">
      <Element :x="-$offsetX" :y="$offsetY" :src="$data.backgroundImage" w="1920" h="1080">
        <Element :src="$mainImageUrl" :w="$data.imageWidth" :h="$data.imageHeight" y="$imageY" x="80" />
        <Element x="$data.imageWidth + 160" y="$imageY + 120" :h="$data.imageHeight" w="600">
          <FastImage :src="$logoImageUrl" w="462" h="154" :imageX="0" imageY="0" :alpha="$logoImageUrl ? 1 : 0" />
          <Text :content="$data.description" wordwrap="600" y="174" />
        </Element>
      </Element>
    </Element>
  `,
  state() {
    return {
      alpha: 1,
      focused: false,
      offsetY: 0,
    }
  },
  hooks: {
    focus() {
      if (this.alpha === 0) this.alpha = 1
      this.focused = true
    },
    unfocus() {
      this.focused = false
    },
  },
  input: {
    down(e) {
      this.alpha = 0
      this.parent.focus(e)
    },
  },
  watch: {
    focused(value) {
      this.offsetY = value ? -this.parent.offsetY : 0
    },
  },
  computed: {
    imageY() {
      return (this.data.height - this.data.imageHeight) / 2
    },
    offsetX() {
      return this.parent.offsetX || 0
    },
    mainImageUrl() {
      return this.data.mainImage + '?impolicy=nbc_com&im=Resize,width=960;Crop,width=960,height=580'
    },
    logoImageUrl() {
      return this.data.logo ? this.data.logo + '?impolicy=nbc_com&imwidth=462&imheight=154' : null
    },
  },
  props: ['data'],
})
