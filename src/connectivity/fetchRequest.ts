const apiUrl = process.env.NEXT_PUBLIC_API_URL

export async function fetchRequest<TResponse>(
  path: string,
  contentType?: 'string',
): Promise<TResponse> {
  const url = `${apiUrl + path}`
  // Basic setup - can be extended with project specific request config headers and error handling
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': contentType || 'application/json',
    },
  })
  const responseType = response.headers.get('content-type')

  const data = responseType?.includes('application/json')
    ? await response.json()
    : await response.text()

  if (!response.ok) {
    // TODO: add API error handling
    throw new Error('Something went wrong')
  }

  return data
}
