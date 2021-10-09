import { APIRequest } from './interfaces'

export async function fetchApi<T>(rqst: APIRequest): Promise<T> {
  let response: Response | null = null,
    result: T | Error | null = null

  try {
    response = await fetch(rqst.url, rqst as RequestInit)
  } catch (exception) {
    throw new Error('Ошибка при выполнении запроса')
  }

  try {
    result = await response.json()
  } catch (exception) {
    throw new Error('Ошибка получения данных')
  }

  if (!response.ok) {
    throw new Error('Ошибка при выполнении запроса')
  }

  console.log('API:', result)

  return result as T
}
