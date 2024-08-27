'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { QUERY_KEY } from '@/utils/queryKeys'

export default function Error({ error }: { error: Error & { digest?: string } }) {
  const router = useRouter()

  useEffect(() => {
    // TODO: Log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by re-rendering the initial page
          () => router.push(`/?${QUERY_KEY.PAGE}=1`)
        }
      >
        Try again
      </button>
    </div>
  )
}
