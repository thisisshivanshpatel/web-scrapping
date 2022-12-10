const puppeteer = require("puppeteer");

async function run() {
  //opening the browser
  const browser = await puppeteer.launch();

  //opening a new page
  const page = await browser.newPage();

  //go to the specific url
  await page.goto("https://www.traversymedia.com");

  //take a screenshot
  // await page.screenshot({ path: "example.png", fullPage: true });

  //download pdf
  //   await page.pdf({ path: "example.pdf", format: "A4" });

  //take html
  //   const html=await page.content();

  const title = await page.evaluate(() => document.title);

  console.log(title);
  //close the browser
  await browser.close();
}

run();
