import Tile from "./Tile.js";

export class MovieTile extends Tile{
  constructor(data) {
    super(data);
  }
  get image() {
    return this.data.data.posterImage
  }
}
