import Blits from '@lightningjs/blits'

export default Blits.Component('MovieTile', {
  template: `
    <Element>
      <Element :w="$item.width" :h="$item.height">
        <Element :src="$imageUrl" w="$item.imageWidth" h="$item.imageHeight" maxlines="2"/>
        <Element y="$item.titleYPosition">
          <Text content="$item.title" wordwrap="$item.wordWrap" size="$item.titleSize"/>
        </Element>
      </Element>
    </Element>
  `,
  computed: {
    imageUrl() {
      return this.item.image + `?impolicy=nbc_com&im=Resize,width=330;Crop,width=330,height=440`
    }
  },
  props: ['index', 'item']
})
