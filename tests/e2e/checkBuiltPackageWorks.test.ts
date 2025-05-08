import { expect, test } from '@playwright/test';

['loadViaUmdScript', 'loadViaEsModuleImport'].forEach((importMethod) => {
  test(`${importMethod} should work`, async ({ page }) => {
    await page.goto(`/${importMethod}.html`);

    await expect(page.getByRole('heading', { name: 'First chapter' })).toBeVisible();

    await expect(page.getByRole('button', { name: /^1 First section$/ })).not.toBeVisible();

    await page.getByRole('button', { name: 'First section' }).click();

    await expect(page.getByText('This is a bold and italic example.')).toBeVisible();

    await page.getByText('This should take you to the table in the section below.').click();
    await expect(page.getByRole('cell', { name: /We have a website here/ })).toBeVisible();
  });
});
