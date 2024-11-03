import { chromium, Page } from 'playwright-core';

(async () => {
    const browser = await chromium.launch({
        headless: false,
        executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
    });

    const page: Page = await browser.newPage();

    page.context().on('onaction', (data: Object) => {
        console.log('Action', data);
    });

    await page.goto('https://www.google.com/');
    await page.pause();
})();