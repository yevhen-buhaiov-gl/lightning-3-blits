import Blits from "@lightningjs/blits";
import FastImage from '../image/FastImage.js'

export default Blits.Component('GenericTile', {
  components: {
    FastImage,
  },
  template: `
    <Element :w="$item.width" :h="$item.height">
        <Element :alpha="$focused ? 1 : 0" :w="$item.width" :h="$item.height" :effects="$effects"/>
        <Element
          :x="$item.contentXOffset"
          :y="$item.imageYPosition"
          :w="$item.imageWidth"
          :h="$item.imageHeight"
          color="{left: '#414956', right: '#22252e'}"
        />
        <Element
          :x="$item.contentXOffset"
          :y="$item.imageYPosition"
          :src="$imageUrl"
          :w="$item.imageWidth"
          :h="$item.imageHeight"
        />
        <Element :x="$item.contentXOffset" :y="$item.titleYPosition">
          <Text :content="$item.title" :wordwrap="$item.imageWidth - 90" :size="$item.titleSize" :maxlines="$item.titleMaxLines"/>
          <FastImage :src="$item.whiteBrandLogo" w="90" h="50" :imageX="$item.imageWidth" />
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
      //this.$announcer.speak(this.item.announce)
    },
    unfocus() {
      this.focused = false
    },
  },
  props: ['item']
})
