import { BaseResponse, ModelType } from "@core/types.ts"

export type BaseUserType = ModelType & {
    email: string
    firstName: string
    lastName: string
    avatar?: string
}


export type ClinicaFormData = {
    uniqueToken: string | null
    clinicName: string;
    legalAddress: string;
    phoneNumber: string;
    email: string;
    website: string;
    taxpayerIdNumber: string;
    stateRegistrationNumber: string;
    clinicType: string;
    licenseNumber: string;
    licenseExpiryDate: string;
    bankAccountDetails: string;
    additionalServices: number[];
    accountingSystem: string;
    instagram: string;
    telegram: string;
    facebook: string;
    youtube: string;
    geolocationLatitude: number;
    geolocationLongitude: number;
    description: string;
}


export type ClinicaFormDataResponse = BaseResponse & {
    data: [{ clinicId: string, clinicName: string, logoFilePath: string }]
}


// Xodim ma'lumotlari uchun umumiy interfeys
export type Worker = {
    id: number;
    nameUz?: string; // O'zbekcha nom (optional)
    nameRu?: string; // Ruscha nom (optional)
}

// Tillar bo'yicha strukturani aniqlash
export type WorkerDataByLanguage = {
    [key: string]: Worker[]; // Kalit so'z (masalan, "Qabulxona", "Kassa") va xodimlar ro'yxati
}

// Tillar bo'yicha asosiy ma'lumot strukturasi
export type WorkerData = {
    uz: WorkerDataByLanguage; // O'zbekcha ma'lumotlar
    rus: WorkerDataByLanguage; // Ruscha ma'lumotlar
}

// Response strukturasi
export type WorkerPositionsResponse = BaseResponse & {
    data: WorkerData; // Xodimlar ma'lumotlari
}



export type UploadClinicLogo = {
    logo: File | null
}


export type UploadClinicLogoResponse = BaseResponse & {
    data: [{ clinicId: number, clinicShortName: string, byDefaultLogo: boolean, logoFilePath: string }]
}


export type UploadClinicaPhotoParams = {
    clinicId: number
    clinicShortName: string
    byDefaultLogo: boolean
}




