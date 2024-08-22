import Tile from "./Tile.js";

export class UpcomingLiveTile extends Tile {
  constructor(data) {
    super(data);
  }
  get title() {
    return this.data.data.title
  }
}
