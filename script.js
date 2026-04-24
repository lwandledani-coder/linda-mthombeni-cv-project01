// Generate-PDF
const path = require('path');
const { pathToFileURL } = require('url');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    protocolTimeout: 0,
  });

  const page = await browser.newPage();
  page.setDefaultTimeout(0);

  const fileUrl = pathToFileURL(path.join(process.cwd(), 'index.html')).href;
  await page.goto(fileUrl, { waitUntil: 'domcontentloaded', timeout: 0 });

  await page.pdf({
    path: 'Lindani C Mthombeni_CV.pdf',
    format: 'A4',
    printBackground: true,
    timeout: 0,
  });

  await browser.close();
  console.log('PDF generated: Lindani C Mthombeni_CV.pdf');
})();