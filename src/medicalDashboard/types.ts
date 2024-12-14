import { BaseResponse, ModelType } from "@core/types.ts"

export type BaseUserType = ModelType & {
    email: string
    firstName: string
    lastName: string
    avatar?: string
}


export type ClinicaUpdateData = {
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
    instagram: string;
    telegram: string;
    facebook: string;
    youtube: string;
    geolocationLatitude: number;
    geolocationLongitude: number;
    description: string;
}



export type ClinicaUpdateDataResponse = BaseResponse & {
    data: [{ clinicId: number, clinicName: string }]
}



export type ClinicData = {
    id: number;
    clinicName: string;
    clinicShortName: string;
    legalAddress: string;
    phoneNumber: string;
    email: string;
    website: string;
    taxpayerIdNumber: string;
    stateRegistrationNumber: string;
    clinicType: string;
    licenseNumber: string | null;
    licenseExpiryDate: string | null;
    bankAccountDetails: string;
    additionalServices: number[];
    instagram: string | null;
    telegram: string | null;
    facebook: string | null;
    youtube: string | null;
    geolocationLatitude: number;
    geolocationLongitude: number;
    description: string | null;
    byDefaultLogo: boolean;
    logoFilePath: string;
};


export type ClinicResponse = BaseResponse & {
    data: ClinicData;
};



export type DeleteClinicData = {
    clinicId: number;
    clinicName: string;
};

export type DeleteClinicResponse = BaseResponse & {
    data: DeleteClinicData;
};


export type ClinicaUploadParams = {
    clinicId: number
}
