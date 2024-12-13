import axios, { AxiosRequestConfig } from "axios"
import { auth } from "@users/utils/auth.ts"

export const domain = import.meta.env.VITE_BASE_URL

const baseAxios = axios.create({ baseURL: `${domain}/api/` })

export default baseAxios

export async function request(options: AxiosRequestConfig, isPublic = false) {
    options = isPublic ? options : { ...options, ...auth() }

    const { data } = await baseAxios(options)
    
    return data
}
