export class HeaderComponent {
  constructor(page) {
    this.page = page;

    this.signInButton = page.getByTestId("nav-sign-in");
    this.homeButton = page.getByTestId("nav-home");
    this.signOutButton = page.getByTestId("nav-sign-out");
    this.menuButton = page.getByTestId("nav-menu");
  }

  async clickSignIn() {
    await this.signInButton.click();
  }

  async openMenu() {
    await this.menuButton.click();
  }

  async logout() {
    await this.openMenu();
    await this.signOutButton.click();
  }

  async goToHomePage() {
    await this.homeButton.click();
  }
}
