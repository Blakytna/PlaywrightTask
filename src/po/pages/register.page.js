export class RegisterPage {
  constructor(page) {
    this.page = page;

    this.firstNameField = page.getByTestId("first-name");
    this.lastNameField = page.getByTestId("last-name");
    this.dateOfBirthField = page.getByTestId("dob");
    this.countryList = page.getByTestId("country");
    this.postalCodeField = page.getByTestId("postal_code");
    this.houseNumberField = page.getByTestId("house_number");
    this.phoneField = page.getByTestId("phone");
    this.registrationEmailInput = page.getByTestId("email");
    this.registrationPasswordInput = page.getByTestId("password");
    this.registerButton = page.getByTestId("register-submit");
    this.streetField = page.getByTestId("street");
  }
  async register(user) {
    await this.firstNameField.fill(user.firstName);
    await this.lastNameField.fill(user.lastName);
    await this.dateOfBirthField.fill(user.dateOfBirth);
    await this.countryList.selectOption({ label: "Ukraine" });
    await this.postalCodeField.fill(user.postalCode);
    await this.houseNumberField.fill(user.houseNumber);
    await this.phoneField.fill(user.phone);
    await this.registrationEmailInput.fill(user.email);
    await this.registrationPasswordInput.fill(user.password);

    await this.page.waitForFunction(
      () =>
        document.querySelector('[data-test="street"]')?.value?.trim().length >
        0,
    );

    await this.registerButton.click();
  }
}
