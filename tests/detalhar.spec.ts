import { test, expect } from '@playwright/test';

test('Clicar no botão detalhar em 2 items', async ({ page }) => {
  await page.goto('https://inclua2.ipea.gov.br/recursos');
  await page.locator('div:nth-child(2) > .dorder-container > .btn').first().click();
  await page.getByRole('heading', { name: 'Indicador de Desigualdades e Aprendizagens (IDeA)' }).click();
  await expect(page.getByRole('heading', { name: 'Indicador de Desigualdades e Aprendizagens (IDeA)' })).toBeTruthy();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('div:nth-child(2) > div > div:nth-child(4) > div:nth-child(2) > .row > div:nth-child(2) > .dorder-container > .btn').click();
  await page.getByRole('heading', { name: 'Gender Mainstreaming Made Easy' }).click();
  await expect(page.getByRole('heading', { name: 'Gender Mainstreaming Made Easy' })).toBeTruthy();
  await page.getByRole('button', { name: 'Close' }).click();
});

test('Clicar no botão fechar em 2 items', async ({ page }) => {
  await page.goto('https://inclua2.ipea.gov.br/recursos');
  await page.locator('div:nth-child(2) > .dorder-container > .btn').first().click();
  await page.getByRole('heading', { name: 'Indicador de Desigualdades e Aprendizagens (IDeA)' }).click();
  await expect(page.getByRole('heading', { name: 'Indicador de Desigualdades e Aprendizagens (IDeA)' })).toBeTruthy();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('main').click();
  await expect(page.getByRole('main')).toBeTruthy();
  await page.locator('div:nth-child(2) > div > div:nth-child(4) > div:nth-child(2) > .row > div:nth-child(2) > .dorder-container > .btn').click();
  await page.getByRole('heading', { name: 'Gender Mainstreaming Made Easy' }).click();
  await expect(page.getByRole('heading', { name: 'Gender Mainstreaming Made Easy' })).toBeTruthy();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('main').click();
  await expect(page.getByRole('main')).toBeTruthy();
});