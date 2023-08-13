import Cookies from 'js-cookie'

export const getCookie = (name: string) => {
  return Cookies.get(name) as string | number
}

export const removeCookie = (name: string) => {
  return Cookies.remove(name)
}

export const setCookie = (name: string, value: string, expires?: number) => {
  return Cookies.set(name, value, { expires })
}
