const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setDefaultTimeout(0);
  await page.goto('file:///c:/Users/Eka MaNgobese/Documents/GitHub/linda-mthombeni-cv/myresume.html', { waitUntil: 'domcontentloaded' });
  await page.pdf({ path: 'resume.pdf', format: 'A4' });
  await browser.close();
  console.log('PDF generated: resume.pdf');
})();