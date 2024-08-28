import CardsListing from '@/components/CardsListing'
import Pagination from '@/components/Pagination'
import { fetchStarships } from '@/connectivity/api.starships/api.starships'
import { QUERY_KEY } from '@/utils/queryKeys'

async function getStarshipsData(page?: number) {
  'use server'

  return await fetchStarships({ page: page })
}

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const currentPage = searchParams[QUERY_KEY.PAGE] ? Number(searchParams[QUERY_KEY.PAGE]) : 1
  const starshipsData = await getStarshipsData(currentPage)

  return (
    <div className="page-container flex min-h-screen flex-col">
      <CardsListing listing={starshipsData.results} />
      <Pagination starshipsData={starshipsData} className="mt-12" currentPage={currentPage} />
    </div>
  )
}
