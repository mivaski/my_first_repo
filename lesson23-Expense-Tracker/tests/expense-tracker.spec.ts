import { test, expect } from '@playwright/test';

test.describe('Expense Tracker UI Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForSelector('h1', { timeout: 10000 });
  });

  test('should display the expense tracker title', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Expence Tracker' })).toBeVisible();
  });

  test('should display initial balance of $0.00', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'YOUR BALANCE' })).toBeVisible();
    await expect(page.locator('.bal h1')).toContainText('$0');
  });

  test('should display income and expense sections', async ({ page }) => {
    await expect(page.locator('.inc h3')).toContainText('INCOME');
    await expect(page.locator('.exp h3')).toContainText('EXPENCE');
    await expect(page.locator('.bal h1')).toContainText('$0');
    await expect(page.locator('.inc h2')).toContainText('$0');
    await expect(page.locator('.exp h2')).toContainText('$0');
  });

  test('should add an income transaction', async ({ page }) => {

    await page.getByPlaceholder('Detail of Transaction').fill('Salary');
    await page.getByPlaceholder('Enter A amount').fill('5000');

    await page.getByRole('button', { name: 'Add Transaction' }).click();

    await expect(page.locator('[id="show-trans  "]')).toContainText('Salary');
    await expect(page.locator('[id="show-trans  "]')).toContainText('5000');

    await expect(page.locator('.bal h1')).toContainText('$5000');
    await expect(page.locator('.inc h2')).toContainText('$5000');
  });

  test('should add an expense transaction', async ({ page }) => {
    await page.getByPlaceholder('Detail of Transaction').fill('Salary');
    await page.getByPlaceholder('Enter A amount').fill('5000');
    await page.getByRole('button', { name: 'Add Transaction' }).click();


    await page.getByPlaceholder('Detail of Transaction').fill('Groceries');
    await page.getByPlaceholder('Enter A amount').fill('-200');
    await page.getByRole('button', { name: 'Add Transaction' }).click();

    await expect(page.locator('[id="show-trans  "]')).toContainText('Salary');
    await expect(page.locator('[id="show-trans  "]')).toContainText('5000');
    await expect(page.locator('[id="show-trans  "]')).toContainText('Groceries');
    await expect(page.locator('[id="show-trans  "]')).toContainText('-200');

    await expect(page.locator('.bal h1')).toContainText('$4800');

    await expect(page.locator('.inc h2')).toContainText('$5000');
    await expect(page.locator('.exp h2')).toContainText('$-200');
  });

  test('should delete a transaction', async ({ page }) => {

    await page.getByPlaceholder('Detail of Transaction').fill('Test Transaction');
    await page.getByPlaceholder('Enter A amount').fill('1000');
    await page.getByRole('button', { name: 'Add Transaction' }).click();

    await expect(page.locator('[id="show-trans  "]')).toContainText('Test Transaction');
    await expect(page.locator('.bal h1')).toContainText('$1000');

    await page.locator('.bg-red-500').click();

    await expect(page.locator('[id="show-trans  "]')).not.toContainText('Test Transaction');
    await expect(page.locator('.bal h1')).toContainText('$0');
    await expect(page.locator('.inc h2')).toContainText('$0');
    await expect(page.locator('.exp h2')).toContainText('$0');
  });

});
