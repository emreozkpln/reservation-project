import { useCookies } from "next-client-cookies"

export const getClientSideCookie = () => {
    const cookieStore = useCookies()
    let token = cookieStore.get('token')

    return token
}