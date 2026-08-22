export class ProfilePage {
  constructor(page) {
    this.page = page;

    this.profilePhoneField = page.getByTestId("phone");
    this.updateProfileButton = page.getByTestId("update-profile-submit");
    this.successMessage = page.getByRole("alert");
  }

  async updatePhone(phone) {
    await this.page.waitForFunction(
      () =>
        document.querySelector('[data-test="phone"]')?.value?.trim().length > 0,
    );
    await this.profilePhoneField.fill(phone);
    await this.updateProfileButton.click();
    await this.successMessage.waitFor({ state: "visible" });
  }
}
