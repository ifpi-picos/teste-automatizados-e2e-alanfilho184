import { test, expect } from '@playwright/test';

test('Busca por termo existente', async ({ page }) => {
  await page.goto('https://inclua2.ipea.gov.br/recursos');
  await page.getByText('282 recursos').click();
  await page.getByPlaceholder('Busque por palavra-chave').click();
  await page.getByPlaceholder('Busque por palavra-chave').fill('Gender Mainstreaming');
  await page.locator('.container-search-click').click();
  await page.getByText('1 recursos').click();
  await expect(page.getByText('1 recursos')).toBeTruthy();
});