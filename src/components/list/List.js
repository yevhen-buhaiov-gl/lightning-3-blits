import Blits from "@lightningjs/blits";
import Carousel from "../carousel/Carousel.js";
import Sizes from "../../helpers/sizes.js";

export default Blits.Component('List', {
  components: {
    Carousel,
  },
  template: `
    <Element w="1920" h="1080" color="{top: '#44037a', bottom: '#240244'}">
      <Carousel
        :ref="'Carousel'+$index"
        :for="section in $sections"
        :h="$sizes[$index]"
        :y.transition="-$steps[$rowFocused]"
        items="$section.items"
      />
    </Element>
  `,
  input: {
    up() {
      this.rowFocused = (this.rowFocused - 1 + this.sections.length) % this.sections.length
    },
    down() {
      this.rowFocused = (this.rowFocused + 1) % this.sections.length
    },
  },
  state() {
    return {
      rowFocused: 0,
    }
  },
  hooks: {
    ready() {
      if (!this.sections.length) return;
      this.trigger('setFocused')
    }
  },
  computed: {
    sizes() {
      return this.sections.map((section) => {
        if (!section.items.length) return 0;
        return this.getHeight(section)
      })
    },
    steps() {
      return this.sections.reduce((acc, curr) => {
        return [...acc, acc[acc.length - 1] + this.getHeight(curr)];
      }, [0]);
    }
  },
  methods: {
    getHeight(section) {
      return section.items.length ? Math.max(...section.items.map((item) => Sizes[item.component].height)) : 0
    }
  },
  watch: {
    setFocused(v) {
      const row = this.select(`Carousel${v}`)
      if (row && row.focus) row.focus()
    },
  },
  props: ['sections']
})
