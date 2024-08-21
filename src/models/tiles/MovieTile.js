import Tile from "./Tile.js";

export class MovieTile extends Tile{
  constructor(component, data) {
    super(component, data);
  }
  get image() {
    return this.data.posterImage
  }
}
