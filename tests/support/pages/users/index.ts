import { Locator, Page, expect } from "@playwright/test"
import { UserModel } from "../../../fixtures/user.model";
import dotenv from 'dotenv';

dotenv.config();
const BASE_URL = process.env.BASE_URL;

export class UsersPage {
  readonly page: Page
  readonly firstName: Locator
  readonly lastName: Locator
  readonly email: Locator
  readonly telephone: Locator
  readonly password: Locator
  readonly confirm: Locator
  readonly newsletterYes: Locator
  readonly terms: Locator
  readonly continueButton: Locator

  constructor(page: Page) {
    this.page = page
    this.firstName = page.locator('id=input-firstname');
    this.lastName = page.locator('id=input-lastname');
    this.email = page.locator('id=input-email');
    this.telephone = page.locator('id=input-telephone');
    this.password = page.locator('id=input-password');
    this.confirm = page.locator('id=input-confirm');
    this.newsletterYes = page.locator('label:has-text("Yes")');
    this.terms = page.locator('label:has-text("Privacy Policy")');
    this.continueButton = page.locator('input[value="Continue"]');
  }

  async visitURL() {
    if (!BASE_URL) {
      throw new Error("A variável de ambiente BASE_URL não está definida!");
    }

    await this.page.goto(BASE_URL);
  }

  async register(user: UserModel) {
    await this.firstName.fill(user.firstName)
    await this.lastName.fill(user.lastName)
    await this.email.fill(user.email)
    await this.telephone.fill(user.telephone)
    await this.password.fill(user.password)
    await this.confirm.fill(user.confirmPassword)

    // await this.page.fill("id=input-firstname", user.firstName);
    // await this.page.fill("id=input-lastname", user.lastName);
    // await this.page.fill("id=input-email", user.email);
    // await this.page.fill("id=input-telephone", user.telephone);
    // await this.page.fill("id=input-password", user.password);
    // await this.page.fill("id=input-confirm", user.confirmPassword);

    if (user.newsletter == true) {
      await this.newsletterYes.click();
    //   await this.page.locator('label:has-text("Yes")').click();
    }

    if (user.terms) {
      await this.terms.click();
    //   await this.page.locator('label:has-text("Privacy Policy")').click();
    }
    await this.continueButton.click();
    // await this.page.locator('input[value="Continue"]').click();
  }

  async checkTitle() {
    await expect(this.page).toHaveTitle("Your Account Has Been Created!");
  }

}
