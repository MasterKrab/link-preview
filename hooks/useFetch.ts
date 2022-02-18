import { useState, useEffect } from 'react'

const useFetch = <Type>(url: string) => {
  const [data, setData] = useState<Type | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    if (!url) return
    ;(async () => {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [url])

  return {
    data,
    isLoading,
    error,
  }
}

export default useFetch
