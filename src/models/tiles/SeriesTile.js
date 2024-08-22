import Tile from "./Tile.js";

export class SeriesTile extends Tile {
  constructor(data) {
    super(data);
  }
  get title() {
    return this.data.data.title
  }
  get image() {
    return this.data.data.posterImage
  }
}
