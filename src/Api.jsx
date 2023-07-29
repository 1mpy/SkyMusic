async function getTracks() {
  const response = await fetch(
    'https://painassasin.online/catalog/track/all/',
    {
      method: 'GET',
    }
  )
  if (!response.ok) {
    throw new Error('Ошибка сревера')
  }
  const data = await response.json()
  return data
}

export default getTracks
