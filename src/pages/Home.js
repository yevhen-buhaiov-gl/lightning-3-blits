import Blits from '@lightningjs/blits'
import Data from "../api/mocked-data.js";
import { shelfMapper } from "../helpers/map.js";
import List from "../components/list/List.js";

export default Blits.Component('Home', {
  components: {
    List,
  },
  template: `
    <Element>
      <List ref="List" :sections="$sections"/>
    </Element>
  `,
  hooks: {
    init() {
      this.sections = shelfMapper(Data.sections).filter((shelf) => shelf.items.length)
    },
    ready() {
      const list = this.select('List')

      if (list) {
        list.focus()
      }
    }
  },
})
