import { DoctorFormData } from "@doctors/types";
import React, { createContext, useContext } from "react";


export interface DoctorContextType {
    data: DoctorFormData;
    setData: React.Dispatch<React.SetStateAction<DoctorFormData>>;
}

export const defaultData: DoctorFormData = {
    firstName: "",
    lastName: "",
    fatherName: "",
    userName: "",
    password: "",
    passwordConfirm: "",
    base64Photo: "",
    phoneNumber: "",
    timeOutMinutes: 0,
    allowedWorkingHours: [],
    sex: "",
    salary: 0,
    position: [],
    canSeeReports: false,
    clinicId: 0,
    legalAddress: "Uzbekstan",
    orderSign: "",
    description: ""

};


export const DoctorContext = createContext<DoctorContextType | undefined>(undefined);

export const useDoctors = () => {
    const context = useContext(DoctorContext);
    if (!context) {
        throw new Error("useDoctors must be used within a DoctorsProvider");
    }
    return context;
};
