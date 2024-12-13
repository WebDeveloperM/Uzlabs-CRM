
import { useFetch } from "@core/hooks/request"
import { request } from "@core/utils/baseAxios.ts"
import { ClinicResponse } from "@my-clinica/types"
import { GET_CLINIC } from "@my-clinica/urls"


export const useGetClinicData = (clinicId: string) => {
    return useFetch<ClinicResponse>(["get-clinic"], () => request({ url: GET_CLINIC.replace("{clinicId}", clinicId) }))
}


