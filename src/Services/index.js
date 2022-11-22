import axios from 'axios'
global.Buffer = global.Buffer || require('buffer').Buffer
import matter from 'gray-matter'
import handleError from '@/Services/utils/handleError'
import { Config } from '@/Config'

const instance = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  },
  timeout: 30000,
})

instance.interceptors.response.use(
  response => {
    try {
      const data = matter(response.data)
      return {
        ...response,
        data: {
          data: data.data,
          content: data.content
        }
      }
    } catch (e) {
      return response
    }
  },
  ({ request, message, response: { data, status } }) => {
    return handleError({ request, message, data, status })
  },
)

export default instance
