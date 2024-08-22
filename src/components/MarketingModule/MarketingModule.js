import Blits from "@lightningjs/blits";

export default Blits.Component('MarketingModule', {
  template: `
    <Element>
      <Element :x="-$offsetX" :y="$offsetY" :src="$data.backgroundImage" w="1920" h="1080">
        <Element :src="$mainImageUrl" :w="$data.imageWidth" :h="$data.imageHeight" y="$imageY" x="80"/>
        <Element x="$data.imageWidth + 160" y="$imageY + 120" :h="$data.imageHeight" w="600">
          <Element :src="$logoImageUrl" w="462" h="154" :alpha="$logoImageUrl ? 1 : 0"/>
          <Text :content="$data.description" wordwrap="600" y="174"/>
        </Element>
      </Element>
    </Element>
  `,
  state() {
    return {
      focused: false,
      offsetY: 0,
    }
  },
  hooks: {
    focus() {
      this.focused = true
    },
    unfocus() {
      this.focused = false
    },
  },
  watch: {
    focused(value) {
      this.offsetY = value ? -this.parent.offsetY : 0
    }
  },
  computed: {
    imageY() {
      return (this.data.height - this.data.imageHeight) / 2
    },
    offsetX() {
      return this.parent.offsetX || 0
    },
    mainImageUrl() {
      return this.data.mainImage + `?impolicy=nbc_com&im=Resize,width=960;Crop,width=960,height=580`
    },
    logoImageUrl() {
      return this.data.logo ? this.data.logo + `?impolicy=nbc_com&imwidth=462&imheight=154` : null
    }
  },
  props: ['data']
})
