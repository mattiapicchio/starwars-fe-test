import { fetchStarships } from '@/connectivity/api.starships/api.starships'
import { QUERY_KEY } from '@/utils/queryKeys'

async function getStarshipsData(page?: number) {
  'use server'

  return await fetchStarships({ page: page })
}

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const currentPage = searchParams[QUERY_KEY.PAGE] ? Number(searchParams[QUERY_KEY.PAGE]) : 1
  const starshipsData = await getStarshipsData(currentPage)
  // console.log('starshipsData', starshipsData)

  return <div className="page-container flex min-h-screen flex-col">STAR WARS</div>
}
