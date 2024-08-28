import { FetchStarshipsResponse } from '@/connectivity/api.starships/types.starships'
import { classnames } from '@/utils/classnames'
import Link from 'next/link'

type PaginationProps = {
  starshipsData: FetchStarshipsResponse
  className?: string
  currentPage: number
}

export default async function Pagination({
  starshipsData,
  currentPage,
  className,
}: PaginationProps) {
  const { previous, next } = starshipsData

  return (
    <div className={classnames('flex w-full items-center justify-center gap-8', className)}>
      {previous && (
        <Link href={`?page=${currentPage - 1}`} className="button-primary">
          <span>Prev</span>
        </Link>
      )}
      {next && (
        <Link href={`?page=${currentPage + 1}`} className="button-primary">
          <span>Next</span>
        </Link>
      )}
    </div>
  )
}
