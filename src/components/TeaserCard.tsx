import { Starship } from '@/connectivity/api.starships/types.starships'
import { classnames } from '@/utils/classnames'
import { formatDate } from '@/utils/dateUtils'
import { ROUTES } from '@/utils/routes'
import { extractIdFromSwapiUrl } from '@/utils/urlUtils'
import Link from 'next/link'

type StarshipCardProps = {
  starship: Starship
  className?: string
}

export default async function TeaserCard({ starship, className }: StarshipCardProps) {
  const starshipId = extractIdFromSwapiUrl(starship.url)

  if (!starshipId) return <StarshipCard starship={starship} className={className} />

  return (
    <Link href={`${ROUTES.STARSHIP}/${starshipId}`}>
      <StarshipCard starship={starship} className={className} />
    </Link>
  )
}

const StarshipCard = ({ starship, className }: StarshipCardProps) => {
  return (
    <ol
      className={classnames(
        'transform rounded-md border border-yellow bg-black-rich p-3 font-light text-yellow transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-custom-light [&>li>span:first-of-type]:text-white [&>li]:mt-2',
        className,
      )}
    >
      <li>
        <span>Name: </span>
        <p>{starship.name}</p>
      </li>
      <li>
        <span>Manufacturer: </span>
        <p className="sm:line-clamp-2 sm:min-h-[48px]">{starship.manufacturer}</p>
      </li>
      <li>
        <span>Crew: </span>
        <p>{starship.crew}</p>
      </li>
      <li>
        <span>Created: </span>
        <p>{formatDate(new Date(starship.created))}</p>
      </li>
    </ol>
  )
}
