const chromium = require("@sparticuz/chromium");
const puppeteer = require("puppeteer-core");

module.exports.handler = async () => {
  const productsList = [];

  try {
    const browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless
    });
    const page = await browser.newPage();
    await page.goto("https://www.amazon.com.br/bestsellers");

    await page.setViewport({ width: 1366, height: 768 });

    const productHandles = await page.$$(
      "#anonCarousel1 .a-carousel > .a-carousel-card"
    );

    for (const producthandle of productHandles.slice(0, 3)) {
      const title = await page.evaluate(
        (el) =>
          el.querySelector(".p13n-sc-truncate-desktop-type2.p13n-sc-truncated")
            .textContent,
        producthandle
      );
      const price = await page.evaluate(
        (el) => el.querySelector("._cDEzb_p13n-sc-price_3mJ9Z").textContent,
        producthandle
      );
      const img = await page.evaluate(
        (el) =>
          el
            .querySelector(
              ".a-dynamic-image.p13n-sc-dynamic-image.p13n-product-image"
            )
            .getAttribute("src"),
        producthandle
      );

      productsList.push({
        title,
        price,
        img
      })
    }

    await browser.close();
    
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          productsList
        },
        null,
        2
      ),
    };
    
  } catch (error) {
    console.error("Ocorreu um erro ao coletar dados da página:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Ocorreu um erro ao coletar dados da página." }),
    };
  }


};
