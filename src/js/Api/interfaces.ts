export interface APIRequest extends RequestInit {
  url: RequestInfo
}

export interface getDogResponse {
  message: string
  status: string
}
