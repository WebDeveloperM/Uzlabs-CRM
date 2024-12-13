import { domain, request } from "@core/utils/baseAxios.ts"
import { useFetch, useMutate } from "@core/hooks/request.ts"
import { REGISTER_CLINIC, UPLOAD_CLINIC_LOGO, WORKER_POSITIONS } from "@clinica/urls.ts"
import { ClinicaFormData, ClinicaFormDataResponse, UploadClinicaPhotoParams, UploadClinicLogo, UploadClinicLogoResponse, WorkerPositionsResponse } from "../types"
import axios from "axios"
import { useMutation } from "react-query"

const authToken = import.meta.env.VITE_AUTHORIZATION_TOKEN

export const useClinicRegister = () => {
    return useMutate<ClinicaFormDataResponse, ClinicaFormData>((data) =>
        request({ url: REGISTER_CLINIC, method: "POST", data })
    )
}


export const useWorkerPositions = () => {
    return useFetch<WorkerPositionsResponse>(["worker-position"], () => request({ url: WORKER_POSITIONS }))
}



const uploadClinicLogo = async (data: UploadClinicLogo & UploadClinicaPhotoParams) => {
    const formData = new FormData();
    formData.append("logo", data.logo as File);

    const params = {
        clinicId: data.clinicId,
        clinicShortName: data.clinicShortName,
        byDefaultLogo: data.byDefaultLogo
    }

    const response = await axios.post<UploadClinicLogoResponse>(`${domain}/api${UPLOAD_CLINIC_LOGO}`, formData, {
        headers: {
            "Authorization": authToken,
            "Content-Type": "multipart/form-data",
        },
        params

    });
    return response.data;
};


export const useUploadClinicLogo = () => {
    return useMutation(uploadClinicLogo);
};

