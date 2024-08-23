import Blits from "@lightningjs/blits";

export default Blits.Component('FastImage', {
  template: `
    <Element
      :src="$src"
      @loaded="$imageLoaded"
      :w="$imageWidth"
      :h="$imageHeight"
      :y="$computedPosition.y"
      :x="$computedPosition.x"
    />
  `,
  state() {
    return {
      imageHeight: 0,
      imageWidth: 0,
    }
  },
  computed: {
    computedPosition() {
      const align = this.align || 'start'
      switch (align) {
        case 'start':
          return {
            y: this.imageY ? this.imageY - this.imageHeight : 0,
            x: this.imageX ? this.imageX - this.imageWidth : 0,
          }
        case 'center':
          return {
            y: this.imageY ? this.imageY - this.imageHeight / 2 : 0,
            x: this.imageX ? this.imageX - this.imageWidth / 2 : 0,
          }
        case 'end':
          return {
            y: this.imageY ? this.imageY + this.imageHeight : 0,
            x: this.imageX ? this.imageX + this.imageWidth : 0,
          }
        default:
          return {
            y: 0,
            x: 0,
          }

      }
    },
  },
  methods: {
    imageLoaded(dimensions) {
      if (dimensions.w > this.w || dimensions.h > this.h) {
        const precision = dimensions.w / dimensions.h
        if (dimensions.h > dimensions.w) {
          this.setImageMaxHeight(precision)
          if (this.imageWidth > this.w) {
            this.setImageMaxWidth(precision)
          }
        } else {
          this.setImageMaxWidth(precision)
          if (this.imageHeight > this.h) {
            this.setImageMaxHeight(precision)
          }
        }
      } else {
        this.imageWidth = dimensions.w
        this.imageHeight = dimensions.h
      }
    },
    setImageMaxHeight(precision) {
      this.imageHeight = this.h
      this.imageWidth = this.h * precision
    },
    setImageMaxWidth(precision) {
      this.imageWidth = this.w
      this.imageHeight = this.w / precision
    }
  },
  props: ['imageX', 'imageY', 'w', 'h', 'src', 'align'],
})
