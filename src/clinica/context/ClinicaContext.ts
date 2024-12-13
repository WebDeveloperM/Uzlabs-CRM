import { ClinicaFormData } from "@clinica/types";
import React, { createContext, useContext } from "react";


export interface ClinicaContextType {
    data: ClinicaFormData;
    setData: React.Dispatch<React.SetStateAction<ClinicaFormData>>;
}

export const defaultData: ClinicaFormData = {
    uniqueToken: "",
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
    accountingSystem: "",
    instagram: "",
    telegram: "",
    facebook: "",
    youtube: "",
    geolocationLatitude: 0,
    geolocationLongitude: 0,
    description: "",
};


export const ClinicaContext = createContext<ClinicaContextType | undefined>(undefined);

export const useClinica = () => {
    const context = useContext(ClinicaContext);
    if (!context) {
        throw new Error("useClinica must be used within a ClinicaProvider");
    }
    return context;
};
