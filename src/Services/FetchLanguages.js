import api, { handleError } from '@/Services'

export default async () => {
  //const response = await api.get(`users/${userId}`)
  const languages = [
    {
      title: 'German',
      languageCode: 'de',
      language: 'germany',
    },
    {
      title: 'English',
      languageCode: 'en',
      language: 'united-kingdom'
    },
    {
      title: 'Spanish',
      languageCode: 'es',
      language: 'spain'
    },
  ]

  return { languages }
}
