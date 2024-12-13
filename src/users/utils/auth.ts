import { LoginResponse } from "@users/types"
import { NavigateFunction } from "react-router-dom"

const authToken = import.meta.env.VITE_AUTHORIZATION_TOKEN

export function auth() {
    return {
        headers: {
            Authorization: authToken,
        },
    }
}

let permissions: string[] | undefined

export function checkPermission(permission: string) {
    if (permissions === undefined) {
        permissions = JSON.parse(localStorage.getItem("permissions") || "[]") as string[]
    }

    return permissions.includes(permission)
}

export function clearPermissions() {
    permissions = undefined
}

// export function getToken(): string {
//     const token = localStorage.getItem("uniqueToken")
//     return `${token}`
// }

export function login({ clinicId, token, expiration, role, uniqueToken }: LoginResponse, navigate: NavigateFunction) {
    localStorage.setItem("token", token)
    localStorage.setItem("expiration", expiration)
    localStorage.setItem("uniqueToken", uniqueToken)
    localStorage.setItem("clinicId", clinicId.toString())
    localStorage.setItem("role", role)
    clinicId == 0 ? navigate("/clinica") : navigate("/dashboard")
        
}

export function logout(navigate: NavigateFunction) {
    localStorage.clear()
    navigate("/")
}

export function isAuthenticated() {
    const now = new Date()
    const expiration = localStorage.getItem("expiration")
    const uniqueToken = localStorage.getItem("uniqueToken")

    if (!expiration) return false
    if (!uniqueToken) return false

    const targetDate = new Date(expiration as string)
    return localStorage.getItem("token") && now < targetDate
}

export function isCheckClinic() {
    const clinicId = localStorage.getItem("clinicId")
    return clinicId && parseInt(clinicId) != 0
}
