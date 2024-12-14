import { ClinicaUpdateData } from "@my-clinica/types";
import React, { createContext, useContext } from "react";


export interface ClinicaUpdateContextType {
    newData: ClinicaUpdateData;
    setData: React.Dispatch<React.SetStateAction<ClinicaUpdateData>>;
}

export const defaultData: ClinicaUpdateData = {
    clinicName: "",
    legalAddress: "",
    phoneNumber: "",
    email: "",
    website: "",
    taxpayerIdNumber: "",
    stateRegistrationNumber: "",
    clinicType: "",
    licenseNumber: "",
    licenseExpiryDate: "",
    bankAccountDetails: "",
    additionalServices: [],
    instagram: "",
    telegram: "",
    facebook: "",
    youtube: "",
    geolocationLatitude: 0,
    geolocationLongitude: 0,
    description: "",
};


export const ClinicaUpdateContext = createContext<ClinicaUpdateContextType | undefined>(undefined);

export const useClinicaUpdate = () => {
    const context = useContext(ClinicaUpdateContext);
    if (!context) {
        throw new Error("useClinica must be used within a ClinicaProvider");
    }
    return context;
};


