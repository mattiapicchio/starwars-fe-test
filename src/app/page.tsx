import CardsListing from '@/components/CardsListing'
import Pagination from '@/components/Pagination'
import SearchBar from '@/components/SearchBar'
import { fetchStarships, searchStarships } from '@/connectivity/api.starships/api.starships'
import { QUERY_KEY } from '@/utils/queryKeys'

async function getStarshipsData(page?: number) {
  'use server'

  return await fetchStarships({ page: page })
}

async function fetchSearchResults(input: string, page: number) {
  'use server'

  return await searchStarships({ input: input, page: page })
}

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const currentPage = searchParams[QUERY_KEY.PAGE] ? Number(searchParams[QUERY_KEY.PAGE]) : 1
  const starshipsData = await getStarshipsData(currentPage)

  const searchQuery: string = (searchParams?.query as string) || ''
  const searchResults = await fetchSearchResults(searchQuery, currentPage)

  const activeListing = searchQuery ? searchResults : starshipsData

  return (
    <div className="page-container flex min-h-screen flex-col">
      <SearchBar placeholder="search ships ..." />
      <CardsListing listing={activeListing.results} className="mt-3" />
      <Pagination
        listingData={activeListing}
        className="mt-12"
        currentPage={currentPage}
        searchQuery={searchQuery}
      />
    </div>
  )
}
