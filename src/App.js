import Blits from '@lightningjs/blits'

import Home from './pages/Home.js'

export default Blits.Application({
  template: `
    <Element w="1920" h="1080">
      <RouterView />
    </Element>
   `,
  routes: [{ path: '/', component: Home }],
})
