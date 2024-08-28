export type FetchStarshipsResponse = {
  results: Starship[]
  count: number
  previous: Nullable<string>
  next: Nullable<string>
}

export type Starship = {
  name: string
  manufacturer: string
  created: string // ISO 8601 date format
  crew: string
  url: string
}
