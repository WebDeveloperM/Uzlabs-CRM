import { useFetch, useMutate } from "@core/hooks/request"
import { DoctorFormData, DoctorFormDataResponse, DoctorRolesResponse } from "@doctors/types"
import { request } from "@core/utils/baseAxios.ts"
import { CREATE_DOCTOR, DOCTOR_ROLS } from "@doctors/urls"

export const useDoctorRols = () => {
    return useFetch<DoctorRolesResponse>(["doctor-roles"], () => request({ url: DOCTOR_ROLS }))
}


export const useAddDoctors = () => {
    return useMutate<DoctorFormDataResponse, DoctorFormData>((data) =>
        request({ url: CREATE_DOCTOR, method: "POST", data })
    )
}


