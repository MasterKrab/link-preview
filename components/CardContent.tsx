import { Card, Text, Link } from '@nextui-org/react'

interface CardContentProps {
  title?: string
  description?: string
  url?: string
  defaultUrl: string
}

const CardContent = ({
  title,
  description,
  url,
  defaultUrl,
}: CardContentProps) => (
  <Card.Body css={{ p: 10 }}>
    <Text h2 size={20}>
      <Link color={title ? 'secondary' : 'warning'} href={url || defaultUrl}>
        {title || 'No title'}
      </Link>
    </Text>
    <p>{description || 'No description'}</p>
    {url && <Link href={url}>🔗 {url}</Link>}
  </Card.Body>
)

export default CardContent
