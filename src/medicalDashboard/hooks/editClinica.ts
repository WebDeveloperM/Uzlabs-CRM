import { useMutate } from "@core/hooks/request"
import { request } from "@core/utils/baseAxios.ts"
import { ClinicaUpdateData, ClinicaUpdateDataResponse } from "@my-clinica/types"
import { UPDATE_CLINIC } from "@my-clinica/urls"
import { useQueryClient } from "react-query"


// export const useUpdateClinica = (clinicId: string) => {
//     return useMutate<ClinicaUpdateDataResponse, ClinicaUpdateData>((data) =>
//         request({ url: UPDATE_CLINIC.replace("{clinicId}", clinicId), method: "post", data, })
//     )
// }

export const useUpdateClinica = (clinicId: string) => {
    const queryClient = useQueryClient()

    return useMutate<ClinicaUpdateDataResponse, ClinicaUpdateData>(
        (data) => request({ url: UPDATE_CLINIC.replace("{clinicId}", clinicId), method: "post", data }),
        { onSuccess: () => queryClient.invalidateQueries(["get-clinic"]) }
    )
}



