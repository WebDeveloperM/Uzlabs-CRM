import { BaseResponse, ModelType } from "@core/types.ts"

export type BaseUserType = ModelType & {
    email: string
    firstName: string
    lastName: string
    avatar?: string
}

export type Department = {
    id: number;
    nameUz: string;
    nameRu: string;
}

export type DoctorRolesResponse = BaseResponse & {
    data: Department[];
}



export type DoctorFormData = {
    firstName: string,
    lastName: string,
    fatherName: string,
    userName: string,
    password: string,
    passwordConfirm: string,
    base64Photo: string,
    phoneNumber: string,
    timeOutMinutes: number,
    allowedWorkingHours: string[],
    sex: string,
    salary: number,
    position: number[],
    canSeeReports: boolean,
    clinicId: number,
    legalAddress: string,
    orderSign: string,
    description: string
}


export type DoctorFormDataResponse = BaseResponse & {
    data: [{ clinicId: string, clinicName: string, logoFilePath: string }]
}



export type DoctorsParamsType = {
    clinicId: number
}


export type DoctorItemResponseType = {

    uniqueToken: string;
    firstName: string;
    lastName: string;
    fatherName: string;
    phoneNumber: string;
    sex: "Male" | "Female";
    salary: number;
    position: number[];
    canSeeReports: boolean;
    allowedWorkingHours: string;
    legalAddress: string;
    description: string;
    orderSign: string;
    timeOutMinutes: number;
    base64Photo: string

}
export type DoctorResponseType = BaseResponse & {
    data?: []
}


export type DeleteDoctorResponseType = BaseResponse & {
    data?: []
}


type DoctorsView = {
    uniqueToken: string;
    firstName: string;
    lastName: string;
    fatherName: string;
    base64Photo: string;
    phoneNumber: string;
    sex: "Male" | "Female";
    salary: number;
    position: number[];
    canSeeReports: boolean;
    legalAddress: string;
    description: string;
    orderSign: string;
    allowedWorkingHours: string; // Format: "HH:MM:SS,HH:MM:SS"
    timeOutMinutes: number;
    clinicId: number;
}

export type DoctorDetailResponseType = BaseResponse & {
    data: DoctorsView
}


export type DoctorUpdate = {
    firstName: string;
    lastName: string;
    fatherName: string;
    base64Photo: string;
    phoneNumber: string;
    timeOutMinutes: number;
    allowedWorkingHours: string[];
    sex: string;
    salary: number;
    position: number[];
    canSeeReports: boolean;
    legalAddress: string;
    description: string;
    orderSign: string;
};



export type DoctorUpdateResponse = BaseResponse & {
    data?: { employeeId: string; firstName: string; lastName: string }
}
