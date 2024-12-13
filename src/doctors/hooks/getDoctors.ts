
import { useFetch } from "@core/hooks/request"
import { request } from "@core/utils/baseAxios.ts"
import { DoctorResponseType } from "@doctors/types"
import { DOCTORS_LIST } from "@doctors/urls"


export function useDocorsList(clinicId: string, enabled = true) {
    return useFetch<DoctorResponseType>(["doctors"], () => request({ url: DOCTORS_LIST.replace("{clinicId}", clinicId) }), {
        enabled,
    })
}
