import Blits from "@lightningjs/blits";
import Shelf from "../shelf/Shelf.js";
import MarketingModule from "../MarketingModule/MarketingModule.js"

export default Blits.Component('List', {
  components: {
    Shelf,
    MarketingModule,
  },
  template: `
    <Element w="1920" h="1080" color="#1F2127">
      <Component
        is="$section.component"
        :x="$offsetX"
        :ref="'row'+$index"
        :for="(section, index) in $sections"
        :y.transition="-$steps[$focusedIndex] + $steps[$index] + 40"
        items="$section.items"
        title="$section.title"
      />
    </Element>
  `,
  input: {
    up() {
      this.focusedIndex = this.focusedIndex > 0 ? this.focusedIndex - 1 : 0
    },
    down() {
      this.focusedIndex = this.focusedIndex < this.sections.length - 1 ? this.focusedIndex + 1 : this.focusedIndex
    },
  },
  state() {
    return {
      focusedIndex: 0,
      offsetX: 80,
    }
  },
  hooks: {
    ready() {
      this.trigger('focusedIndex')
    },
  },
  computed: {
    steps() {
      return this.sections.reduce((acc, curr) => {
        return [
          ...acc,
          acc[acc.length - 1] + curr.height
        ];
      }, [0]);
    }
  },
  watch: {
    focusedIndex(v) {
      const row = this.select(`row${v}`)
      if (row && row.focus) this.$setTimeout(() =>  row.focus())
    },
  },
  props: ['sections']
})
