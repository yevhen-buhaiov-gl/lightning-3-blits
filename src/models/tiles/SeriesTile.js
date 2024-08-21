import Tile from "./Tile.js";

export class SeriesTile extends Tile {
  constructor(component, data) {
    super(component, data);
  }
  get title() {
    return this.data.title
  }
  get image() {
    return this.data.posterImage
  }
}
