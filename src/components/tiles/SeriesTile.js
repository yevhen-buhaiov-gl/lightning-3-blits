import Blits from '@lightningjs/blits'

export default Blits.Component('SeriesTile', {
  template: `
    <Element>
      <Element :w="$item.width" :h="$item.height">
        <Element :src="$imageUrl" w="330" h="440"/>
        <Element y="460">
          <Text content="$item.data.title" wordwrap="330" size="28" maxlines="2"/>
        </Element>
      </Element>
    </Element>
  `,
  computed: {
    imageUrl() {
      return this.item.data.posterImage + `?impolicy=nbc_com&im=Resize,width=330;Crop,width=330,height=440`
    }
  },
  props: ['index', 'item']
})
