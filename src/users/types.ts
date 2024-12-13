import { ModelType } from "@core/types.ts"

export type BaseUserType = ModelType & {
    firstName: string
    lastName: string
}

export type BaseResponse = {
    success: string
    message: string
}

export type SignUpSuperUser = {
    firstName: string
    lastName: string
    fatherName: string
    personalNumber: number
    pasportSerNum: string
    paymentExpiryDate: string
    isActive: boolean
}

export type SignUpSuperUserResponse = BaseResponse & {
    data?: { uniqueToken: string; uniqueUrl: string }
}

export type SignUpSuperUserAddRegister = {
    token?: string
    username: string
    password?: string
    confirmPassword?: string
}
export type SignUpSuperUserAddRegisterResponse = BaseResponse & {
    token: string
    data: string
}

export type AccountLogin = {
    username: string
    password: string
}

export type AccountLoginResponse = BaseResponse & {
    data: { token: string; expiration: string, role: string, uniqueToken: string, clinicId: number }
}

// export type AccountLoginResponseAuth = {
//     token: string
//     expiration: string
// }


export type LoginResponse = {
    token: string;
    expiration: string,
    role: string,
    uniqueToken: string,
    clinicId: number
}

type AdminData = {
    uniqueToken: string;
    id: string;
    firstName: string;
    lastName: string;
    fatherName: string;
    personalNumber: number;
    pasportSerNum: string;
    isActive: boolean;
    paymentExpiryDate: string; // ISO date string (e.g., "YYYY-MM-DD")
    photoBase64: string; // Base64 encoded string or empty
};


export type AdminDataResponse = BaseResponse & {
    data?: AdminData
}