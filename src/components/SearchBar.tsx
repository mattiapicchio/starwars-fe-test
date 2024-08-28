'use client'

import { QUERY_KEY } from '@/utils/queryKeys'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

type SearchBarProps = {
  placeholder?: string
}

export default function SearchBar({ placeholder }: SearchBarProps) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const params = new URLSearchParams(searchParams)
  // Debounce the search requests to the database
  const onHandleSearch = useDebouncedCallback((term: string) => {
    params.set(QUERY_KEY.PAGE, '1')

    if (term) {
      params.set(QUERY_KEY.QUERY, term)
    } else {
      params.delete(QUERY_KEY.QUERY)
    }

    replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <div className="flex items-center justify-between">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="rounded-md border border-yellow bg-black-rich px-4 py-2"
        placeholder={placeholder}
        onChange={(event) => onHandleSearch(event.target.value)}
        defaultValue={searchParams.get(QUERY_KEY.QUERY)?.toString()} // Keep the input value in sync with the query param
      />
    </div>
  )
}
