export interface APIRequest extends RequestInit {
  url: RequestInfo
}

export interface RickAndMortyResponse {
  id: number
  image: string
}
