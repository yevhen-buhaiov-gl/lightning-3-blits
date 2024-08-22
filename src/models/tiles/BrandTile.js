import Sizes from "../../helpers/sizes.js";

export class BrandTile {
  constructor(data) {
    this.data = data
  }

  get id() {
    return this.data.data.v4ID
  }

  get title() {
    return this.data.data.displayTitle
  }

  get colorBrandLogo() {
    return this.data.data.colorBrandLogo
  }

  get whiteBrandLogo() {
    return this.data.data.whiteBrandLogo
  }

  get component() {
    return this.data.component
  }

  get width() {
    return Sizes[this.component].width
  }

  get height() {
    return Sizes[this.component].height
  }

  get backgroundWidth() {
    return Sizes[this.component].backgroundWidth
  }

  get backgroundHeight() {
    return Sizes[this.component].backgroundHeight
  }
}
