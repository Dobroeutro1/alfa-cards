import { fetchApi } from './utils'
import { HEADERS } from './constants'
import { RickAndMortyResponse } from './interfaces'

export default class Api {
  generateUrl(id: number): string {
    return `https://rickandmortyapi.com/api/character/${id}`
  }

  async getRickAndMorty(id: number): Promise<RickAndMortyResponse> {
    const result = await fetchApi<RickAndMortyResponse>({
      url: this.generateUrl(id),
      method: 'GET',
      headers:HEADERS
    })

    return result
  }
}
