import Blits from '@lightningjs/blits'

export default Blits.Component('MovieTile', {
  template: `
    <Element>
      <Element :src="$item.data.image" w="420" h="240" :x="$index * (500 + 20)" color="#fff"/>
    </Element>
  `,
  props: ['index', 'item']
})
