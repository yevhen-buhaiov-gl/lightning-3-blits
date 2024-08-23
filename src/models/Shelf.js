import { shelfItemsMapper } from "../helpers/map.js";

export class Shelf {
  constructor(shelf) {
    this.shelf = shelf
    this.items = shelfItemsMapper(shelf.data.items)
  }

  get title() {
    return this.shelf.data.listTitle
  }

  get component() {
    return this.shelf.component
  }

  get height() {
    return (this.items.length
      ? Math.max(...this.items.map((item) => item.height + 100))
      : 0)
  }

  get empty() {
    return !this.items.length
  }

  get announce() {
    return this.shelf.data.ariaLabel
  }
}
