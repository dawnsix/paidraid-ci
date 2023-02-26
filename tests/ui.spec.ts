import { test, expect } from '@playwright/test';
import { basecfg } from "../datasource"
import { defineConfig, devices } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto(basecfg.url);

  console.log(page.url())
  let title = await page.title()
  console.log(title)

  await expect(page).toHaveTitle(/Test Breaker/);
});

test.skip('check posts', async ({ page }) => {
  await page.goto(basecfg.url);
  await page.screenshot({ path: basecfg.shotpath + Date.now() + '-pg-home.png' });

  await page.getByTitle('postsTile').click();
  await expect(page.getByText('Trials', { exact: true })).toBeVisible();

  let btn_accept = await page.$('text=Accept Offer');
  await btn_accept?.waitForElementState("visible")

  await page.screenshot({ path: basecfg.shotpath + Date.now() + '-pg-posts.png' });

  await expect(page).toHaveURL(basecfg.url + "posts");
});
