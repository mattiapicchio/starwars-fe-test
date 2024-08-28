import { Starship } from '@/connectivity/api.starships/types.starships'
import TeaserCard from '@/components/TeaserCard'

export default async function CardsListing({ listing }: { listing: Starship[] }) {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {listing?.map((starship: Starship) => <TeaserCard starship={starship} key={starship.name} />)}
    </section>
  )
}
