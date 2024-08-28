import { FetchStarshipsResponse } from '@/connectivity/api.starships/types.starships'
import { classnames } from '@/utils/classnames'
import { QUERY_KEY } from '@/utils/queryKeys'
import Link from 'next/link'

type PaginationProps = {
  listingData: FetchStarshipsResponse
  className?: string
  currentPage: number
  searchQuery?: string
}

export default async function Pagination({
  listingData,
  searchQuery,
  currentPage,
  className,
}: PaginationProps) {
  const { previous, next } = listingData

  const handlePrevLink = () => {
    if (searchQuery !== '')
      return `?${QUERY_KEY.PAGE}=${currentPage - 1}&${QUERY_KEY.QUERY}=${searchQuery}`

    return `?${QUERY_KEY.PAGE}=${currentPage - 1}`
  }

  const handleNextLink = () => {
    if (searchQuery !== '')
      return `?${QUERY_KEY.PAGE}=${currentPage + 1}&${QUERY_KEY.QUERY}=${searchQuery}`

    return `?${QUERY_KEY.PAGE}=${currentPage + 1}`
  }

  return (
    <div className={classnames('flex w-full items-center justify-center gap-8', className)}>
      {previous && (
        <Link href={handlePrevLink()} className="button-primary">
          <span>Prev</span>
        </Link>
      )}
      {next && (
        <Link href={handleNextLink()} className="button-primary">
          <span>Next</span>
        </Link>
      )}
    </div>
  )
}
