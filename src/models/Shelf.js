import { shelfItemsMapper } from "../helpers/map.js";

export class Shelf {
  constructor(shelf) {
    this.component = shelf.component
    this.title = shelf.data.listTitle
    this.items = shelfItemsMapper(shelf.data.items)
  }
}
