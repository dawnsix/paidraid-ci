import { test, expect } from '@playwright/test';
import { basecfg } from "../datasource"

test('has title', async ({ page }) => {
  await page.goto(basecfg.url);

  await expect(page).toHaveTitle(/Paid Raid/);
});

test('check posts', async ({ page }) => {
  await page.goto(basecfg.url);
  await page.screenshot({ path: basecfg.shotpath + 'pg-home.png' });

  await page.getByTitle('postsTile').click();
  await expect(page.getByText('Trials', { exact: true })).toBeVisible();

  let btn_accept = await page.$('text=Accept Offer');
  await btn_accept?.waitForElementState("visible")

  await page.screenshot({ path: basecfg.shotpath + 'pg-posts.png' });

  await expect(page).toHaveURL(basecfg.url + "posts");
});
