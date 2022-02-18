import type { NextPage } from 'next'
import { useRef, FormEvent } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Text, Grid, Input, Button } from '@nextui-org/react'

const Home: NextPage = () => {
  const input = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const handleSubmit = (e: FormEvent) => {
    if (!input.current?.checkValidity()) return
    e.preventDefault()

    const encoded = encodeURIComponent(input.current.value)

    router.push(`/${encoded}`)
  }

  return (
    <>
      <Head>
        <title>Link Preview</title>
        <meta name="description" content="Get metadata of a page" />
      </Head>
      <Text h1>Link Preview</Text>
      <Text
        css={{
          marginBottom: '3rem',
        }}
      >
        Get metadata of a page and preview the result in a simple way.
      </Text>

      <form onSubmit={handleSubmit}>
        <Grid.Container gap={1}>
          <Grid xs={12} sm={6}>
            <Input
              ref={input}
              type="url"
              name="url"
              labelPlaceholder="Enter a URL"
              aria-label="URL"
              css={{ width: '100%', borderRadius: 0 }}
            />
          </Grid>
          <Grid xs>
            <Button
              type="submit"
              shadow
              css={{
                backgroundColor: '$purple600',
              }}
            >
              Go
            </Button>
          </Grid>
        </Grid.Container>
      </form>
    </>
  )
}

export default Home
