export default function ({ request, message, data, status }) {
  return Promise.reject({ request, message, data, status })
}
