import Blits from "@lightningjs/blits";
import VideoTile from "../tiles/VideoTile.js";
import SeriesTile from "../tiles/SeriesTile.js";
import MovieTile from "../tiles/MovieTile.js";
import UpcomingLiveTile from "../tiles/UpcomingLiveTile.js";

export default Blits.Component('Carousel', {
  components: {
    VideoTile,
    SeriesTile,
    MovieTile,
    UpcomingLiveTile,
  },
  template: `
    <Element>
      <Component is="$item.component" :for="(item, idx) in $items" item="$item" index="$idx" :color="#000000" />
    </Element>
  `,
  input: {
    left(e) {
      console.log('left', e);
    },
    right(e) {
      console.log('right',e);
    },
  },
  props: ['items']
})
