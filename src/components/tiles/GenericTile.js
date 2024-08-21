import Blits from "@lightningjs/blits";

export default Blits.Component('GenericTile', {
  template: `
    <Element :w="$item.width" :h="$item.height">
        <Element :alpha.transition="{value: $focusAlpha, duration: 200}" :w="$item.width" :h="$item.height" :effects="$effects"/>
        <Element
          :x="$item.contentXOffset"
          :y="$item.imageYPosition"
          :src="$imageUrl"
          :alpha.transition="{value: $alpha, duration: 500}"
          :w="$item.imageWidth"
          :h="$item.imageHeight"
          @loaded="$imageLoaded"
        />
        <Element :x="$item.contentXOffset" :y="$item.titleYPosition">
          <Text :content="$item.title" :wordwrap="$item.imageWidth - 60" :size="$item.titleSize" :maxlines="$item.titleMaxLines"/>
        </Element>
        <Element>
          <Element :src="$item.whiteBrandLogo" w="42" h="40" :y="$item.titleYPosition" :x="$item.contentXOffset + $item.imageWidth - 48"/>
        </Element>
      </Element>
  `,
  computed: {
    imageUrl() {
      return this.item.image + `?impolicy=nbc_com&im=Resize,width=${this.item.imageHeight};Crop,width=${this.item.imageWidth},height=${this.item.imageHeight}`
    }
  },
  state() {
    return {
      alpha: 0.001,
      focusAlpha: 0.001,
      focused: false,
      effects: [
        this.shader('border', { width: 8, color: '#fff' }),
      ],
    }
  },
  hooks: {
    focus() {
      this.focused = true
      this.trigger('focused')
    },
    unfocus() {
      this.focused = false
      this.trigger('focused')
    },
  },
  watch: {
    focused(v) {
        this.focusAlpha = v ? 1 : 0
    }
  },
  methods: {
    imageLoaded() {
      this.alpha = 1
    }
  },
  props: ['item']
})
