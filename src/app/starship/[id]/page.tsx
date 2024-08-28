import { fetchStarship } from '@/connectivity/api.starships/api.starships'
import { formatDate } from '@/utils/dateUtils'
import { ROUTES } from '@/utils/routes'
import Link from 'next/link'

type StarshipPageProps = {
  params: Params
}

type Params = {
  id: string
}

export async function generateMetadata({ params }: StarshipPageProps) {
  const starshipId = params.id
  const starshipData = await getStarshipData(starshipId)

  if (!starshipData) return

  return {
    title: `${starshipData.name}`,
    description: `${starshipData.manufacturer}`,
    openGraph: {
      title: `${starshipData.name}`,
      description: `${starshipData.manufacturer}`,
    },
  }
}

async function getStarshipData(id: string) {
  'use server'

  return await fetchStarship({ id: id })
}

export default async function StarshipPage({ params }: StarshipPageProps) {
  const starshipId = params.id
  const starshipData = await getStarshipData(starshipId)

  return (
    <div className="page-container flex min-h-screen flex-col">
      <Link href={`${ROUTES.HOME}`} className="button-primary w-fit">
        <span>&lt; Back</span>
      </Link>
      <ol className="mt-6 rounded-md border border-yellow bg-black-rich p-3 font-light text-yellow [&>li>span:first-of-type]:text-white [&>li]:mt-4">
        <li>
          <span>Starship: </span>
          <p>{starshipData.name}</p>
        </li>
        <li>
          <span>Manufacturer: </span>
          <p>{starshipData.manufacturer}</p>
        </li>
        <li>
          <span>Crew: </span>
          <p>{starshipData.crew}</p>
        </li>
        <li>
          <span>Created: </span>
          <p>{formatDate(new Date(starshipData.created))}</p>
        </li>
      </ol>
    </div>
  )
}
