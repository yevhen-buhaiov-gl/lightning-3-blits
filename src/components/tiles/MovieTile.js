import Blits from "@lightningjs/blits";
import GenericTile from "./GenericTile.js";

export default Blits.Component('VideoTile', {
  components: {
    GenericTile,
  },
  template: `
    <GenericTile ref="GenericTile" item="$item" />
  `,
  hooks: {
    focus() {
      const tile = this.select('GenericTile')
      if (tile) tile.focus()
    },
    unfocus() {
      const tile = this.select('GenericTile')
      if (tile) tile.unfocus()
    },
  },
  props: ['item']
})
