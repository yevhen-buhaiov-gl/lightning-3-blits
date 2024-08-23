import Sizes from "../../helpers/sizes.js";

export default class Tile {
  constructor(data) {
    this.data = data
  }

  get id() {
    return this.data.data.v4ID
  }

  get component() {
    return this.data.component
  }

  get title() {
    return this.data.data.secondaryTitle
  }

  get image() {
    return this.data.data.image
  }

  get width() {
    return Sizes[this.component].width
  }

  get height() {
    return Sizes[this.component].height
  }

  get imageWidth() {
    return Sizes[this.component].imageWidth
  }

  get imageHeight() {
    return Sizes[this.component].imageHeight
  }

  get whiteBrandLogo() {
    return this.data.data.whiteBrandLogo
  }

  get titleSize() {
    return 24
  }

  get titleMaxLines() {
    return 2
  }

  get imageYPosition() {
    return 16
  }

  get contentXOffset() {
    return (this.width - this.imageWidth) / 2
  }

  get titleYPosition() {
    return this.imageHeight + this.imageYPosition + 20
  }

  get announce() {
    return this.data.data.ariaLabel
  }
}
