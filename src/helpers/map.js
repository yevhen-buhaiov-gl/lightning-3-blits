import { Shelf } from "../models/Shelf.js";
import { VideoTile } from "../models/tiles/VideoTile.js";
import { SeriesTile } from "../models/tiles/SeriesTile.js";
import { MovieTile } from "../models/tiles/MovieTile.js";
import { UpcomingLiveTile } from "../models/tiles/UpcomingLiveTile.js";
import { MarketingModule } from "../models/MarketingModule.js";
import { BrandTile } from "../models/tiles/BrandTile.js";

export const shelfMapper = (sections) => {
  if (!sections.length) return []
  return sections.map((section) => {
    switch (section.component) {
      case 'Shelf':
        return new Shelf(section)
      case 'MarketingModule':
        return new MarketingModule(section)
      default:
        console.warn(`Unsupported section ${section.component}`)
    }
  }).filter((model) => !!model)
}

export const shelfItemsMapper = (items) => {
  return items.map((item) => {
    switch (item.component) {
      case 'VideoTile':
        return new VideoTile(item)
      case 'SeriesTile':
        return new SeriesTile(item)
      case 'MovieTile':
        return new MovieTile(item)
      case 'UpcomingLiveTile':
        return new UpcomingLiveTile(item)
      case 'BrandTile':
        return new BrandTile(item)
      default:
        console.warn(`Unsupported component ${item.component}`);
        break
    }
  }).filter((model) => !!model)
}
