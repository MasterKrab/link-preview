import type { NextApiRequest, NextApiResponse } from 'next'
import type { Metadata } from 'types/Metadata'
import getHtml from 'lib/getHtml'
import getMetadata from 'lib/getMetadata'

interface Data extends Metadata {
  error?: string
}

const handler = async (
  request: NextApiRequest,
  response: NextApiResponse<Data>
) => {
  const url = request.query.url as string

  const html = await getHtml(url)

  if (!html) return response.status(400).json({ error: 'Invalid URL' })

  const metadata = getMetadata(html)

  response.status(200).json(metadata)
}

export default handler
