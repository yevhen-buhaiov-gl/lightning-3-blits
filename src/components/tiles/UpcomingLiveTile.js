import Blits from '@lightningjs/blits'

export default Blits.Component('UpcomingLiveTile', {
  template: `
    <Element>
      <Element :w="$item.width" :h="$item.height">
        <Element :src="$imageUrl" w="420" h="235"/>
        <Element y="260">
          <Text content="$item.data.title" wordwrap="420" size="28" maxlines="2"/>
        </Element>
      </Element>
    </Element>
  `,
  computed: {
    imageUrl() {
      return this.item.data.image + `?impolicy=nbc_com&im=Resize,width=420;Crop,width=420,height=235`
    }
  },
  props: ['index', 'item']
})
