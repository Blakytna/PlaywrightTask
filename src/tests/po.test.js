import { test, expect } from "@playwright/test";
import {
  AccountPage,
  FavoritesPage,
  HomePage,
  LoginPage,
  ProductPage,
  ProfilePage,
  RegisterPage,
  HeaderComponent,
} from "../po/index.js";

import { createRandomUser } from "./testData/userData.js";

async function registerAndLoginUser(page) {
  const user = createRandomUser();

  const header = new HeaderComponent(page);
  const loginPage = new LoginPage(page);
  const registerPage = new RegisterPage(page);
  const accountPage = new AccountPage(page);

  await page.goto("/");
  await header.clickSignIn();
  await loginPage.goToRegistration();
  await registerPage.register(user);
  await loginPage.login(user);

  await expect(page).toHaveURL(/\/account/);

  return user;
}
test.afterEach(async ({ page }) => {
  const header = new HeaderComponent(page);
  await header.logout();
});

test.describe("User sign-up and sign-in", () => {
  test("should register a new user and log in successfully", async ({
    page,
  }) => {
    await registerAndLoginUser(page);

    await expect(page).toHaveURL(/\/account/);
  });
});

test.describe("Authenticated user actions", () => {
  test.beforeEach(async ({ page }) => {
    await registerAndLoginUser(page);
  });

  test("should update phone number successfully", async ({ page }) => {
    const accountPage = new AccountPage(page);
    const profilePage = new ProfilePage(page);

    const newPhone = createRandomUser().phone;

    await accountPage.goToProfile();
    await profilePage.updatePhone(newPhone);

    await expect(profilePage.successMessage).toHaveText(
      "Your profile is successfully updated!",
    );
    await expect(profilePage.profilePhoneField).toHaveValue(newPhone);
  });

  test("should add the product to favorites", async ({ page }) => {
    const header = new HeaderComponent(page);
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const accountPage = new AccountPage(page);
    const favoritesPage = new FavoritesPage(page);

    await header.goToHomePage();
    await homePage.openProduct();

    const productName = (await productPage.productName.textContent()).trim();

    await productPage.addToFavorites();
    await header.openMenu();
    await accountPage.goToFavorites();

    await expect(favoritesPage.productName).toHaveText(productName);
  });
});
