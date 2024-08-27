import { QUERY_KEY } from '@/utils/queryKeys'
import { fetchRequest } from '../fetchRequest'
import { FetchStarshipsResponse } from './types.starships'

export async function fetchStarships({ page = 1 }: { page?: number }) {
  return await fetchRequest<FetchStarshipsResponse>(`starships/?${QUERY_KEY.PAGE}=${page}`)
}
