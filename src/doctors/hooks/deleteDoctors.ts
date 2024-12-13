
import { useMutate } from "@core/hooks/request"
import { request } from "@core/utils/baseAxios.ts"
import { DeleteDoctorResponseType } from "@doctors/types"
import { DELETE_DOCTOR } from "@doctors/urls"


export const useDeleteDoctorData = (uniqueToken: string) => {
    return useMutate<DeleteDoctorResponseType, void>(() =>
        request({ url: DELETE_DOCTOR.replace("{uniqueToken}", uniqueToken), method: "POST", })
    )
}