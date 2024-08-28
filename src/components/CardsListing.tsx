import { Starship } from '@/connectivity/api.starships/types.starships'
import TeaserCard from '@/components/TeaserCard'
import { classnames } from '@/utils/classnames'

export default async function CardsListing({
  listing,
  className,
}: {
  listing: Starship[]
  className?: string
}) {
  return (
    <section
      className={classnames('grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3', className)}
    >
      {listing?.map((starship: Starship) => <TeaserCard starship={starship} key={starship.name} />)}
    </section>
  )
}
