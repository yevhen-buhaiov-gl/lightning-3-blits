import Tile from "./Tile.js";

export class UpcomingLiveTile extends Tile {
  constructor(component, data) {
    super(component, data);
  }
  get title() {
    return this.data.title
  }
}
