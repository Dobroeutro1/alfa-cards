import { fetchApi } from './utils'
import { HEADERS } from './constants'
import { getDogResponse } from './interfaces'

export default class Api {
  readonly url = 'https://dog.ceo/api/breed/doberman/images/random'

  async getDog(): Promise<getDogResponse> {
    const result = await fetchApi<getDogResponse>({
      url: this.url,
      method: 'get',
      headers: HEADERS
    })

    return result
  }
}
