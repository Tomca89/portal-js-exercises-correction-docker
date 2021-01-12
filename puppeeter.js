const puppeteer = require('puppeteer');

async function beans() {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        ignoreHTTPSErrors: true,
        dumpio: false,
        executablePath: '/usr/bin/chromium-browser'
      });
  const page = await browser.newPage();
  await page.goto('http://localhost:8080');

  // Get the "viewport" of the page, as reported by the page.
  const calculations = await page.evaluate(() => {
    return {
      salaries: document.getElementsByClassName("salary"),
      tax: document.getElementById("tax").value
    };
  });

  for (i = 0; i < calculations.salaries.length; i++) {
      console.log('Salaries:', calculations.salaries[i].value)
  }
  console.log('Tax:', calculations.tax);

  await browser.close();
};

module.exports.beans = beans;