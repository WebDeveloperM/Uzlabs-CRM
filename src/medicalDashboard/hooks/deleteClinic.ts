import { useMutate } from "@core/hooks/request"
import { request } from "@core/utils/baseAxios.ts"
import { DeleteClinicResponse } from "@my-clinica/types"
import { DELETE_CLINIC } from "@my-clinica/urls"


export const useDeleteClinicData = (clinicId: string) => {
    return useMutate<DeleteClinicResponse, void>(() =>
        request({ url: DELETE_CLINIC.replace("{clinicId}", clinicId), method: "POST", })
    )
}