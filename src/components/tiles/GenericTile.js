import Blits from "@lightningjs/blits";

export default Blits.Component('GenericTile', {
  template: `
    <Element :w="$item.width" :h="$item.height">
        <Element :alpha="$focused ? 1 : 0" :w="$item.width" :h="$item.height" :effects="$effects"/>
        <Element
          :x="$item.contentXOffset"
          :y="$item.imageYPosition"
          :alpha="$imageLoaded ? 0 : 1"
          :w="$item.imageWidth"
          :h="$item.imageHeight"
          color="{left: '#414956', right: '#22252e'}"
        />
        <Element
          :x="$item.contentXOffset"
          :y="$item.imageYPosition"
          :src="$imageUrl"
          :alpha.transition="{value: $imageAlpha, duration: 600}"
          :w="$item.imageWidth"
          :h="$item.imageHeight"
          @loaded="$onImageLoaded"
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
      return this.item.image + `?impolicy=nbc_com&im=Resize,width=${this.item.imageWidth};Crop,width=${this.item.imageWidth},height=${this.item.imageHeight}`
    }
  },
  state() {
    return {
      imageAlpha: 0.001,
      imageLoaded: false,
      focused: false,
      effects: [
        this.shader('border', { width: 8, color: '#fff' }),
      ],
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
    imageLoaded(value) {
      if (value) this.imageAlpha = 1
    }
  },
  methods: {
    onImageLoaded() {
      this.imageLoaded = true
    },
  },
  props: ['item']
})
