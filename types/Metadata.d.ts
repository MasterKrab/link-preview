export interface Image {
  src?: string
  alt?: string
  width?: number
  height?: number
}

export interface OpenGraph {
  title?: string
  description?: string
  image?: Image
  url?: string
}

export interface TwitterCard {
  card?: string
  title?: string
  description?: string
  image?: Image
  url?: string
}

export interface SimpleData {
  title?: string
  description?: string
}

export interface Metadata extends SimpleData {
  openGraph?: OpenGraph
  twitterCard?: TwitterCard
}
