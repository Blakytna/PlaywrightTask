import { productName } from "../selectors";

export class FavoritesPage {
  constructor(page) {
    this.page = page;

    this.productName = page.locator(productName);
  }
}
