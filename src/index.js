import Blits from '@lightningjs/blits'
import App from './App.js'

Blits.Launch(App, 'app', {
  w: 1920,
  h: 1080,
  multithreaded: true,
  debugLevel: 1,
  fonts: [
    {
      family: 'lato',
      type: 'msdf',
      file: 'fonts/Lato-Regular.ttf',
    },
    {
      family: 'raleway',
      type: 'msdf',
      file: 'fonts/Raleway-ExtraBold.ttf',
    },
    {
      family: 'opensans',
      type: 'web',
      file: 'fonts/OpenSans-Medium.ttf',
    },
    {
      family: 'Copperplate',
      type: 'web',
      file: 'fonts/Copperplate.ttf',
    },
    {
      family: 'Coronet',
      type: 'web',
      file: 'fonts/Coronet.ttf',
    },
    {
      family: 'Courier',
      type: 'web',
      file: 'fonts/Courier.ttf',
    },
    {
      family: 'Helvetica',
      type: 'web',
      file: 'fonts/Helvetica.ttf',
    },
    {
      family: 'Impress',
      type: 'web',
      file: 'fonts/Impress.ttf',
    },
    {
      family: 'Roboto-Regular',
      type: 'web',
      file: 'fonts/Roboto-Regular.ttf',
    },
    {
      family: 'SourceSansPro-Bold',
      type: 'web',
      file: 'fonts/SourceSansPro-Bold.ttf',
    },{
      family: 'SourceSansPro-Light',
      type: 'web',
      file: 'fonts/SourceSansPro-Light.ttf',
    },
    {
      family: 'SourceSansPro-Regular',
      type: 'web',
      file: 'fonts/SourceSansPro-Regular.ttf',
    },
    {
      family: 'SourceSansPro-SemiBold',
      type: 'web',
      file: 'fonts/SourceSansPro-SemiBold.ttf',
    },
    {
      family: 'TimesNewRoman',
      type: 'web',
      file: 'fonts/TimesNewRoman.otf',
    },
  ],
})
