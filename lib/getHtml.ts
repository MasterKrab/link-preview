import puppeteer from 'puppeteer'

const getHtml = async (url: string) => {
  const browser = await puppeteer.launch()
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
