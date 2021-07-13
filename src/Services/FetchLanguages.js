import api, { handleError } from '@/Services'

export default async () => {
  const response = await api.get(`/index.md`)
  return response.data.data
}
