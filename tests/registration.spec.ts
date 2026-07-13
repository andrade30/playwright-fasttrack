import { test, expect, devices } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { UserModel } from "./fixtures/user.model";
import { UsersPage } from "./support/pages/users";

test.describe("Cadastro de Usuário", () => {
  test("registrar novo usuário", async ({ page }) => {
    await page.goto(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/register",
    );

    const inputfirstname = page.locator("#input-firstname");
    await inputfirstname.fill("Fernando");

    await page.fill("id=input-lastname", "Tavares");
    await page.fill("id=input-email", faker.internet.email());
    await page.fill("id=input-telephone", "99 9999-9588");
    await page.fill("id=input-password", "12345");
    await page.fill("id=input-confirm", "12345");

    await page.locator('label:has-text("Yes")').click();
    await page.locator('label:has-text("Privacy Policy")').click();

    await page.locator('input[value="Continue"]').click();
    await expect(page).toHaveTitle("Your Account Has Been Created!");

    await page.waitForTimeout(1000);

    // const inputLastName = page.locator('#input-lastname');
    // await inputLastName.fill('Andrade');
  });
});

test.describe("Teste utilizando métodos built-in", () => {
  test("registrar novo usuário", async ({ page }) => {
    await page.goto(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/register",
    );

    // const inputfirstname = page.locator("#input-firstname");
    // await inputfirstname.fill("Alessandro");

    await page.getByLabel("First Name").fill("Paulo");
    await page.getByLabel("Last Name").fill("Santos");
    await page.getByLabel("E-mail").fill(faker.internet.email());
    await page.getByLabel("Telephone").fill("99 9999-6666");

    await page.fill("id=input-password", "12345");
    await page.fill("id=input-confirm", "12345");

    await page.check('label:has-text("Yes")');
    await page.check('label:has-text("Privacy Policy")');

    await page.getByRole("button", { name: "Continue" }).click();

    await expect(page).toHaveTitle("Your Account Has Been Created!");

    await page.waitForTimeout(1000);

    // const inputLastName = page.locator('#input-lastname');
    // await inputLastName.fill('Andrade');
  });
});

test.describe("Teste utilizando Faker", () => {
  test("registrar novo usuário", async ({ page }) => {
    await page.goto(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/register",
    );

    await page.fill("id=input-firstname", faker.person.firstName());
    await page.fill("id=input-lastname", faker.person.lastName());
    await page.fill("id=input-email", faker.internet.email());
    await page.fill("id=input-telephone", faker.phone.number());

    const pwd = faker.internet.password();

    await page.fill("id=input-password", pwd);
    await page.fill("id=input-confirm", pwd);

    await page.locator('label:has-text("Yes")').click();
    await page.locator('label:has-text("Privacy Policy")').click();

    await page.locator('input[value="Continue"]').click();
    await expect(page).toHaveTitle("Your Account Has Been Created!");

    await page.waitForTimeout(1000);
  });
});

test.describe("Teste com asserts", () => {
  test("registrar novo usuário", async ({ page }) => {
    await page.goto(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/register",
    );

    await page.fill("id=input-firstname", "Pedro");
    await page.fill("id=input-lastname", "Santos");
    await page.fill("id=input-email", faker.internet.email());
    await page.fill("id=input-telephone", "99 9999-4498");
    await page.fill("id=input-password", "12345");
    await page.fill("id=input-confirm", "12345");

    await page.locator('label:has-text("Yes")').click();
    await page.locator('label:has-text("Privacy Policy")').click();

    await page.locator('input[value="Continue"]').click();

    await expect(page).toHaveTitle("Your Account Has Been Created!");
    await expect(page).toHaveURL(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/success",
    );

    await expect(
      page.getByText("Your Account Has Been Created!"),
    ).toBeVisible();

    await page.getByRole("link", { name: "Continue" }).click();

    await page.waitForTimeout(1000);
  });
});

test.describe("Teste com modelagem de dados", () => {
  test("registrar novo usuário", async ({ page }) => {

    const user: UserModel = {
      firstName: "Paulo",
      lastName: "Andrade",
      email: faker.internet.email(),
      telephone: "99 9999-4655",
      password: "123456",
      confirmPassword: "123456",
      newsletter: true,
      terms: true,
    };

    await page.goto(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/register",
    );

    await page.fill("id=input-firstname", user.firstName);
    await page.fill("id=input-lastname", user.lastName);
    await page.fill("id=input-email", user.email);
    await page.fill("id=input-telephone", user.telephone);
    await page.fill("id=input-password", user.password);
    await page.fill("id=input-confirm", user.confirmPassword);

    if (user.newsletter == true) {
      await page.locator('label:has-text("Yes")').click();
    }

    if (user.terms) {
      await page.locator('label:has-text("Privacy Policy")').click();
    }

    await page.locator('input[value="Continue"]').click();

    await expect(page).toHaveTitle("Your Account Has Been Created!");

    await page.waitForTimeout(1000);
  });
});

test.describe("Teste com page object model", () => {
  test("registrar novo usuário", async ({ page }) => {

    const user: UserModel = {
      firstName: "Rafael",
      lastName: "Andrade",
      email: faker.internet.email(),
      telephone: "99 9999-4411",
      password: "123456",
      confirmPassword: "123456",
      newsletter: true,
      terms: true,
    };

    const usersPage = new UsersPage(page);

    await usersPage.visitURL();

    await usersPage.register(user);

    await usersPage.checkTitle();

    await page.waitForTimeout(1000);
  });
});

// test("Lista de devices", async ({page}) => {
//   console.log(devices);
// })
