import type { NextPage } from 'next'
import Head from 'next/head'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import useFetch from 'hooks/useFetch'
import type { Metadata } from 'types/Metadata'
import Cards from 'components/Cards'
import { Loading, Link } from '@nextui-org/react'

const Metadata: NextPage = () => {
  const router = useRouter()
  const { data, isLoading, error } = useFetch<Metadata>(
    router.query.url
      ? `/api/metadata?url=${decodeURIComponent(router.query.url as string)}`
      : ''
  )

  return (
    <>
      <Head>
        <title>Metadata</title>
        <meta name="description" content="Get metadata of a page" />
      </Head>
      {isLoading && (
        <Loading
          color="secondary"
          size="xl"
          textColor="secondary"
          css={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          Loading
        </Loading>
      )}
      {data && (
        <>
          <h1>Metadata</h1>
          <Cards {...data} defaultUrl={router.query.url as string} />
        </>
      )}
      {error && <p>We cannot get the metadata of this page</p>}

      {!isLoading && (
        <NextLink href="/">
          <Link color="secondary">View another page</Link>
        </NextLink>
      )}
    </>
  )
}

export default Metadata
