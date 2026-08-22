export class LoginPage {
  constructor(page) {
    this.page = page;

    this.loginEmailInput = page.getByTestId("email");
    this.loginPasswordInput = page.getByTestId("password");
    this.loginButton = page.getByTestId("login-submit");
    this.registerLink = page.getByTestId("register-link");
  }

  async login(user) {
    await this.loginButton.waitFor({ state: "visible" });
    await this.loginEmailInput.fill(user.email);
    await this.loginPasswordInput.fill(user.password);
    await this.loginButton.click();
  }

  async goToRegistration() {
    await this.registerLink.click();
  }
}
