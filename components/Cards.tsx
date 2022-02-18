import CardPreview from 'components/CardPreview'
import type { Metadata } from 'types/Metadata'
import { Grid, Card, Container, Text } from '@nextui-org/react'

interface CardsProps extends Metadata {
  defaultUrl: string
}

const Cards = ({
  title,
  description,
  openGraph,
  twitterCard,
  defaultUrl,
}: CardsProps) => (
  <>
    <Grid.Container direction="column" css={{ rowGap: 40, paddingBottom: 50 }}>
      <Grid>
        <Card css={{ padding: 10 }}>
          <Card.Body>
            <Text weight="semibold">Title:</Text>
            <Text color={title ? 'default' : 'warning'}>
              {title || 'No title'}
            </Text>
          </Card.Body>
        </Card>
      </Grid>
      <Grid>
        <Card css={{ padding: 10 }}>
          <Card.Body>
            <Text weight="semibold">Description:</Text>
            <Text color={title ? 'default' : 'warning'}>
              {description || 'No description'}
            </Text>
          </Card.Body>
        </Card>
      </Grid>
      {openGraph && (
        <Grid>
          <Text h2 size={20} css={{ marginBottom: 20 }}>
            Open Graph
          </Text>
          <CardPreview defaultUrl={defaultUrl} {...openGraph} />
        </Grid>
      )}
      {twitterCard && (
        <Grid>
          <Text h2 size={20} css={{ marginBottom: 20 }}>
            Twitter Card
          </Text>
          <CardPreview defaultUrl={defaultUrl} {...twitterCard} />
        </Grid>
      )}
    </Grid.Container>
  </>
)

export default Cards
