import { test, expect } from '@playwright/test';

test('Busca por termo existente', async ({ page }) => {
  await page.goto('https://inclua2.ipea.gov.br/recursos');
  await page.getByPlaceholder('Busque por palavra-chave').click();
  await page.getByPlaceholder('Busque por palavra-chave').fill('Gender Mainstreaming');
  await page.locator('.container-search-click').click();
  await expect(page.getByRole('strong').filter({ hasText: 'Gender Mainstreaming Made Easy' })).toBeTruthy();
});

test('Busca por termo inexistente', async ({ page }) => {
  await page.goto('https://inclua2.ipea.gov.br/recursos');
  await page.getByPlaceholder('Busque por palavra-chave').click();
  await page.getByPlaceholder('Busque por palavra-chave').fill('Termo não existente');
  await page.getByText('Ops! nenhum resultado encontrado!').click();
  await expect(page.getByText('Ops! nenhum resultado encontrado!')).toBeTruthy();
});

test('Remoção de caractéres', async ({ page }) => {
  await page.goto('https://inclua2.ipea.gov.br/recursos');
  await page.getByPlaceholder('Busque por palavra-chave').click();
  await page.getByPlaceholder('Busque por palavra-chave').fill('Gender mainstreaming');
  await page.locator('.container-search-click').click();
  await page.getByRole('strong').filter({ hasText: 'Gender Mainstreaming Made Easy' }).click();
  await page.getByPlaceholder('Busque por palavra-chave').click();
  await page.getByPlaceholder('Busque por palavra-chave').fill('');
  await page.locator('.container-search-click').click();
  await page.getByRole('strong').filter({ hasText: 'Indicador de Desigualdades e Aprendizagens (IDeA)' }).click();
  await expect(page.getByText('Indicador de Desigualdades e Aprendizagens (IDeA)')).toBeTruthy();
});