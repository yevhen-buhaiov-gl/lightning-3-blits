import Sizes from "../helpers/sizes.js";

export class MarketingModule {
  constructor(section) {
    this.data = section
  }

  get component() {
    return this.data.component
  }

  get height() {
    return Sizes[this.component].height
  }

  get imageHeight() {
    return Sizes[this.component].imageHeight
  }

  get imageWidth() {
    return Sizes[this.component].imageWidth
  }

  get id() {
    return this.marketingModuleData.v4ID
  }

  get backgroundImage() {
    return this.marketingModuleData.backgroundPreview || this.marketingModuleData.backgroundFallbackImage.path
  }

  get mainImage() {
    return this.marketingModuleData.mainImage.path
  }

  get marketingModuleData() {
    return this.data.marketingModuleData
  }

  get logo() {
    return this.marketingModuleData.logo?.path
  }

  get description() {
    return this.marketingModuleData.description
  }
}
