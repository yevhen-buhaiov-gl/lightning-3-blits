import Blits from '@lightningjs/blits'

export default Blits.Component('SeriesTile', {
  template: `
    <Element>
      <Element :src="$item.data.image" w="330" h="537" :x="$index * (500 + 20)" color="#fff"/>
    </Element>
  `,
  props: ['index', 'item']
})
