import api, { handleError } from '@/Services'

export default async () => {
  const response = await api.get('texts/de.json')
  const walks = response.data.medias

  return { walks }
}
