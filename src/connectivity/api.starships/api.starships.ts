import { QUERY_KEY } from '@/utils/queryKeys'
import { fetchRequest } from '../fetchRequest'
import { FetchStarshipsResponse, Starship } from './types.starships'

export async function fetchStarships({ page = 1 }: { page?: number }) {
  return await fetchRequest<FetchStarshipsResponse>(`starships/?${QUERY_KEY.PAGE}=${page}`)
}

export async function fetchStarship({ id }: { id: string }) {
  return await fetchRequest<Starship>(`starships/${id}`)
}

export async function searchStarships({ input }: { input: string }) {
  return await fetchRequest<FetchStarshipsResponse>(`starships/?search=${input}`)
}
