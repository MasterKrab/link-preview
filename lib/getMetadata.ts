import { load } from 'cheerio'
import type { Metadata, Image } from 'types/Metadata'

const getMetadata = (html: string): Metadata => {
  const $ = load(html)

  const title = $('title').text()
  const description = $('meta[name="description"]').attr('content')

  const getDataProtocol = (protocol: 'og' | 'twitter') => {
    const getValue = (name: string) => {
      const tag = $(`meta[property="${protocol}:${name}"]`)

      const value = tag.attr('content') || tag.attr('value')

      if (value) return value

      const tag2 = $(`meta[name="${protocol}:${name}"]`)

      const value2 = tag2.attr('content') || tag2.attr('value')

      if (value2) return value2
    }

    const title = getValue('title')
    const description = getValue('description')
    const url = getValue('url')

    const getSize = (size: 'width' | 'height') => {
      const value = getValue(`image:${size}`)

      if (value) return parseInt(value)
    }

    const image: Image = {
      src: getValue('image'),
      alt: getValue('image:alt'),
      width: getSize('width'),
      height: getSize('height'),
    }

    const ImageIsEmpty = !Object.values(image).some((value) => value)

    if (!title && !description && ImageIsEmpty) return undefined

    return {
      title,
      description,
      url,
      image: ImageIsEmpty ? undefined : image,
    }
  }

  const openGraph = getDataProtocol('og')
  const twitterCard = getDataProtocol('twitter')

  return { title, description, openGraph, twitterCard }
}

export default getMetadata
