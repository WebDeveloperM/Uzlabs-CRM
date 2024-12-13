import { DoctorUpdate } from "@doctors/types";
import React, { createContext, useContext } from "react";


export interface UpdateDoctorContextType {
    userData: DoctorUpdate;
    setUserData: React.Dispatch<React.SetStateAction<DoctorUpdate>>;
}

export const defaultData: DoctorUpdate = {
    firstName: "",
    lastName: "",
    fatherName: "",
    base64Photo: "",
    phoneNumber: "",
    timeOutMinutes: 0,
    allowedWorkingHours: [],
    sex: "",
    salary: 0,
    position: [],
    canSeeReports: false,
    legalAddress: "",
    description: "",
    orderSign: ""
};


export const UpdateDoctorContext = createContext<UpdateDoctorContextType | undefined>(undefined);

export const useUpdateDoctor = () => {
    const context = useContext(UpdateDoctorContext);
    if (!context) {
        throw new Error("useUpdateDoctor must be used within a ClinicaProvider");
    }
    return context;
};
