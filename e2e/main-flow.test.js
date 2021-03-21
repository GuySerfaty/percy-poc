const puppeteer = require('puppeteer');
const percySnapshot = require('@percy/puppeteer');

describe('main-flow', () => {
  it('first-test', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
    await percySnapshot(page, 'Example Site');
  
    await browser.close();
  })
})
