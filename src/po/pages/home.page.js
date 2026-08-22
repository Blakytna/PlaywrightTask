import { productName } from "../selectors";

export class HomePage {
  constructor(page) {
    this.page = page;

    this.product = page.locator(productName).first();
  }

  async openProduct() {
    await this.product.click();
  }
}
