import Blits from "@lightningjs/blits";
import GenericTile from "../tiles/GenericTile.js";

export default Blits.Component('Carousel', {
  components: {
    GenericTile,
  },
  template: `
    <Element>
      <Element>
        <Text content="$title"/>
      </Element>
      <Element :x.transition="$rowOffset">
        <GenericTile
          y="60"
          :ref="'item'+$idx"
          :for="(item, idx) in $items"
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
      this.trigger('focused')
    },
  },
  watch: {
    focused(value) {
      const focusItem = this.select(`item${value}`)
      if (focusItem && focusItem.focus) {
        focusItem.focus()
        if (value < 1) {
          this.rowOffset = 0
        } else if (value > this.items.length - 2) {
    
        } else {
          this.rowOffset = -this.steps[value] - (value > 0 ? value * 20 : 0)
        }
      }
    },
  },
  input: {
    left() {
      if (this.focused > 0) {
        this.focused--
      } else {
        this.focused = this.items.length - 1
      }
    },
    right() {
      if (this.focused < this.items.length - 1) {
        this.focused++
      } else {
        this.focused = 0
      }
    },
  },
  computed: {
    steps() {
      return this.items.reduce((acc, curr) => [...acc, acc[acc.length - 1] + curr.width], [0]);
    }
  },
  props: ['title', 'items']
})
