import Blits from "@lightningjs/blits";

export default Blits.Component('BrandTile', {
  template: `
    <Element :w="$item.width" :h="$item.height">
      <Element
        :alpha="$focused ? 1 : 0"
        :w="$item.width"
        :h="$item.height"
        :effects="$effects"
      />
      <Element
        :color="$focused ? '#fff' : '#282B2F'"
        :x="$backgroundX"
        y="14"
        :w="$item.backgroundWidth"
        :h="$item.backgroundHeight"
      />
      <Element
        :x="$imageX"
        :y="$imageY"
        :src="$item.whiteBrandLogo"
        :alpha="$focused ? 0 : 1"
        @loaded="$imageLoaded"
        :w="$imageWidth"
        :h="$imageHeight"
      />
      <Element
        :x="$imageX"
        :y="$imageY"
        :src="$item.colorBrandLogo"
        :alpha="$focused ? 1 : 0"
        @loaded="$imageLoaded"
        :w="$imageWidth"
        :h="$imageHeight"
      />
      <Text
        :x="$backgroundX"
        :y="$titleY"
        :content="$item.title"
        :size="26"
      />
    </Element>
  `,
  state() {
    return {
      imageHeight: 0,
      imageWidth: 0,
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
  computed: {
    backgroundX() {
      return (this.item.width - this.item.backgroundWidth) / 2
    },
    imageX() {
      return (this.item.width - this.imageWidth) / 2
    },
    imageY() {
      return this.item.backgroundHeight / 2 + 14 - this.imageHeight / 2
    },
    titleY() {
      return (this.item.backgroundHeight + 14) + ((this.item.height - this.item.backgroundHeight) / 2) - 26
    }
  },
  methods: {
    imageLoaded(dimensions) {
      const imageMaxHeight = 120
      const imageMaxWidth = 230
      if (dimensions.w > imageMaxWidth || dimensions.h > imageMaxHeight) {
        const precision = dimensions.w / dimensions.h
        if (dimensions.h > dimensions.w) {
          this.setImageMaxHeight(imageMaxHeight, precision)
          if (this.imageWidth > imageMaxWidth) {
            this.setImageMaxWidth(imageMaxWidth, precision)
          }
        } else {
          this.setImageMaxWidth(imageMaxWidth, precision)
          if (this.imageHeight > imageMaxHeight) {
            this.setImageMaxHeight(imageMaxHeight, precision)
          }
        }
      } else {
        this.imageWidth = dimensions.w
        this.imageHeight = dimensions.h
      }
    },
    setImageMaxHeight(imageMaxHeight, precision) {
      this.imageHeight = imageMaxHeight
      this.imageWidth = imageMaxHeight * precision
    },
    setImageMaxWidth(imageMaxWidth, precision) {
      this.imageWidth = imageMaxWidth
      this.imageHeight = imageMaxWidth / precision
    }
  },
  props: ['item']
})
