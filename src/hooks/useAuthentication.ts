import { isNil } from 'lodash'
import { getCookie, removeCookie } from 'libraries'

const useAuthentication = () => {
  const user = getCookie('user') ? JSON.parse(String(getCookie('user')) ?? '') : null
  const token = getCookie('token') || null

  const isAuthenticated = !isNil(user) && !!token

  const handleLogout = () => {
    removeCookie('user')
    removeCookie('token')
  }

  return { isAuthenticated, handleLogout, user }
}

export default useAuthentication
