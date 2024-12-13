import { useMutate } from "@core/hooks/request"
import { request } from "@core/utils/baseAxios"
import { DoctorUpdate, DoctorUpdateResponse } from "@doctors/types"
import { UPDATE_DOCTOR } from "@doctors/urls"
import { useQueryClient } from "react-query"

export const useUpdateDoctorReq = (uniqueToken: string) => {
    const queryClient = useQueryClient()

    return useMutate<DoctorUpdateResponse, DoctorUpdate>(
        (data) => request({ url: UPDATE_DOCTOR.replace("{uniqueToken}", uniqueToken), method: "post", data }),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(["doctors"])
                queryClient.invalidateQueries(["get-doctors"])
            }
        }
    )
}