import { productName, successMessage } from "../selectors";

export class ProductPage {
  constructor(page) {
    this.page = page;

    this.productName = page.locator(productName);
    this.addToFavoritesButton = page.getByTestId("add-to-favorites");
    this.successMessage = page.locator(successMessage);
  }

  async addToFavorites() {
    await this.addToFavoritesButton.click();
    await this.successMessage.waitFor({ state: "visible" });
  }
}
