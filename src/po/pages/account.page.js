export class AccountPage {
  constructor(page) {
    this.page = page;

    this.profileButton = page.getByTestId("nav-profile");
    this.myFavoritesButton = page.getByTestId("nav-my-favorites");
  }

  async goToProfile() {
    await this.profileButton.click();
  }

  async goToFavorites() {
    await this.myFavoritesButton.click();
  }
}
