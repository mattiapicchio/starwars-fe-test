'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Error({ error }: { error: Error & { digest?: string } }) {
  const router = useRouter()

  useEffect(() => {
    // Log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => router.push('/?page=1')
        }
      >
        Try again
      </button>
    </div>
  )
}
