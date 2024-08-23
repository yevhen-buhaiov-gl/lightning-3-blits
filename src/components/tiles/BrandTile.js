import Blits from "@lightningjs/blits";
import FastImage from "../image/FastImage.js";

export default Blits.Component('BrandTile', {
  components: {
    FastImage,
  },
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
      >
        <FastImage
          :src="$item.whiteBrandLogo"
          :alpha="$focused ? 0 : 1"
          w="230"
          h="120"
          :imageX="$item.backgroundWidth / 2"
          :imageY="$item.backgroundHeight / 2"
          align="center"
        />
         <FastImage
          :src="$item.colorBrandLogo"
          :alpha="$focused ? 1 : 0"
          w="230"
          h="120"
          :imageX="$item.backgroundWidth / 2"
          :imageY="$item.backgroundHeight / 2"
          align="center"
        />
      </Element>
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
    titleY() {
      return (this.item.backgroundHeight + 14) + ((this.item.height - this.item.backgroundHeight) / 2) - 26
    }
  },
  props: ['item']
})
