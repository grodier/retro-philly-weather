const chromium = require("@sparticuz/chromium");
const puppeteer = require("puppeteer");

async function screenshot(url, path) {
  const executablePath = await chromium.executablePath;
  console.log("EP", executablePath);
  const browser = await puppeteer.launch({
    defaultViewport: {
      width: 1200,
      height: 630,
      deviceScaleFactor: 1,
    },
  });

  const page = await browser.newPage();
  let pageResponse = await Promise.race([
    page.goto(url, {
      waitUntil: ["load"],
      timeout: 8500,
    }),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(false); // false is expected below
      }, 7000); // we need time to execute the window.stop before the top level timeout hits
    }),
  ]);

  if (pageResponse === false) {
    // timed out, resolved false
    await page.evaluate(() => window.stop());
  }

  let options = {
    path,
    type: "jpeg",
    fullPage: false,
    captureBeyondViewport: false,
    clip: {
      x: 0,
      y: 0,
      width: 1200,
      height: 630,
    },
    quality: 80,
  };

  let output = await page.screenshot(options);

  await browser.close();

  return output;
}

async function genOgImage() {
  await screenshot(
    `http://localhost:3000/open-graph/`,
    `./public/assets/og-img.jpg`
  );
}

genOgImage();
