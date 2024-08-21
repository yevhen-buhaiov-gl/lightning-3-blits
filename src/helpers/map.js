import { Shelf } from "../models/Shelf.js";
import { VideoTile } from "../models/tiles/VideoTile.js";
import { SeriesTile } from "../models/tiles/SeriesTile.js";
import { MovieTile } from "../models/tiles/MovieTile.js";
import { UpcomingLiveTile } from "../models/tiles/UpcomingLiveTile.js";

export const shelfMapper = (sections) => {
  if (!sections.length) return []
  return sections.map((section) => {
    if (!section.data?.items?.length) return
    switch (section.component) {
      case 'Shelf':
        return new Shelf(section)
      default:
        console.warn(`Unsupported section ${section.component}`)
    }
  }).filter((model) => !!model)
}

export const shelfItemsMapper = (items) => {
  return items.map((item) => {
    switch (item.component) {
      case 'VideoTile':
        return new VideoTile(item.component, item.data)
      case 'SeriesTile':
        return new SeriesTile(item.component, item.data)
      case 'MovieTile':
        return new MovieTile(item.component, item.data)
      case 'UpcomingLiveTile':
        return new UpcomingLiveTile(item.component, item.data)
      default:
        console.warn(`Unsupported component ${item.component}`);
        break
    }
  }).filter((model) => !!model)
}
