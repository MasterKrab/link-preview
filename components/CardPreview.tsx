import { useState } from 'react'
import type { SimpleData, OpenGraph, TwitterCard } from 'types/Metadata'
import { Card, Text } from '@nextui-org/react'
import CardContent from 'components/CardContent'

interface CardPreviewProps extends SimpleData, OpenGraph, TwitterCard {
  defaultUrl: string
}

const CardPreview = ({
  title,
  description,
  image,
  url,
  defaultUrl,
}: CardPreviewProps) => {
  const [isImageError, setIsImageError] = useState(false)

  const handleClick = () => {
    window.location.href = url || defaultUrl
  }

  return (
    <Card
      onClick={handleClick}
      hoverable
      clickable
      shadow={true}
      css={{ maxWidth: 800 }}
    >
      {!isImageError && (
        <Card.Header css={{ p: 0 }}>
          <Card.Image
            src={image?.src || ''}
            alt={image?.alt || ''}
            width="100%"
            height="auto"
            onError={() => setIsImageError(true)}
            showSkeleton={true}
          />
        </Card.Header>
      )}
      <CardContent
        title={title}
        description={description}
        url={url}
        defaultUrl={defaultUrl}
      />
    </Card>
  )
}

export default CardPreview
