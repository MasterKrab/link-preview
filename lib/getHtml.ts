import chromium from 'chrome-aws-lambda'

const getHtml = async (url: string) => {
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
    ignoreHTTPSErrors: true,
  })
  const page = await browser.newPage()

  try {
    await page.goto(url)
    const html = await page.content()
    return html
  } catch (error) {
    console.error(error)
    return null
  } finally {
    browser.close()
  }
}

export default getHtml
