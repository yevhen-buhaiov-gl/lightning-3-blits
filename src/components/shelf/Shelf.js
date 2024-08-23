import Blits from "@lightningjs/blits";
import {
  VideoTile,
  MovieTile,
  SeriesTile,
  UpcomingLiveTile,
  BrandTile,
} from "../tiles/index.js";

export default Blits.Component('Shelf', {
  components: {
    VideoTile,
    MovieTile,
    SeriesTile,
    UpcomingLiveTile,
    BrandTile,
  },
  template: `
    <Element>
      <Element>
        <Text x="16" content="$data.title"/>
      </Element>
      <Element :x.transition="$rowOffset">
        <Component
          is="$item.component"
          y="60"
          :ref="'item'+$idx"
          :for="(item, idx) in $data.items"
          item="$item"
          :x.transition="$steps[$idx] + ($idx > 0 ? $idx * 20 : 0)"
          key="$item.id"
        />
      </Element>
    </Element>

  `,
  state() {
    return {
      focused: 0,
      rowOffset: 0,
    }
  },
  hooks: {
    focus() {
      //this.$announcer.speak(this.data.announce)
      this.trigger('focused')
    },
  },
  watch: {
    focused(value) {
      const focusItem = this.select(`item${value}`)
      if (focusItem && focusItem.focus) {
        if (value < 1) {
          this.rowOffset = 0
        } else {
          this.rowOffset = -this.steps[value] - (value > 0 ? value * 20 : 0)
        }
        focusItem.focus()
      }
    },
  },
  input: {
    left() {
      if (this.focused > 0) {
        this.focused--
      }
    },
    right() {
      if (this.focused < this.data.items.length - 1) {
        this.focused++
      }
    },
  },
  computed: {
    steps() {
      return this.data.items.reduce((acc, curr) => [...acc, acc[acc.length - 1] + curr.width], [0]);
    }
  },
  props: ['data']
})
