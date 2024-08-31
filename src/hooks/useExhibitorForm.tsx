// src/hooks/useExhibitorForm.tsx

import { useState } from "react";
import { ExhibitorInfo } from "@/interfaces/exhibitor";
import EventSelection from "@/components/forms/exhibitor/step-1/EventSelection";
import BasicInformation from "@/components/forms/exhibitor/step-2/BasicInformation";
import ContactDetails from "@/components/forms/exhibitor/step-3/ContactDetails";

const useExhibitorForm = () => {
    const [step, setStep] = useState(1);
    const [isSaving, setIsSaving] = useState(false);
    const [showModal, setShowModal] = useState(false);

    // Define formData with proper type
    const [formData, setFormData] = useState<{ exhibitorInfo: ExhibitorInfo }>({
        exhibitorInfo: {
            companyName: '',
            contactPerson: '',
            phoneNumber: '',
            email: '',
            password: '',
            confirmPassword: '',
            event: "",
            participationType: "",
            edition: "",
            agreeToTerms: false,
            sameAsOfficeAddress: false,
            noFactoryAddress: false,
            country: undefined,
            region: undefined,
            province: undefined,
            city: undefined,
            zipCode: "",
            street: "",
            firstName: "",
            middleInitial: "",
            lastName: "",
            gender: "",
            designation: "",
            mobileNumber: "",
            viber: false,
            weChat: false,
            whatsApp: false,
            emailAddress: "",
            facebook: "",
            instagram: "",
            twitter: "",
            linkedin: "",
            directory: ""
        },
    });

    const updateFormData = <K extends keyof typeof formData>(section: K, data: Partial<typeof formData[K]>) => {
        setFormData((prevData) => ({
            ...prevData,
            [section]: {
                ...prevData[section],
                ...data,
            },
        }));
    };

    const handleNext = () => setStep((prev) => Math.min(prev + 1, 5));
    const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

    const handleSubmit = () => {
        console.log('Form Submitted:', formData);
        setIsSaving(true);
    };

    const handleSuccess = () => {
        setIsSaving(false);
        setShowModal(true);
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <EventSelection
                        data={formData.exhibitorInfo}
                        updateData={(data) => updateFormData('exhibitorInfo', data)}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                    />
                );
            case 2:
                return (
                    <BasicInformation
                        data={formData.exhibitorInfo}
                        updateData={(data) => updateFormData('exhibitorInfo', data)}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                    />
                );
            case 3:
                return (
                    <ContactDetails
                        data={formData.exhibitorInfo}
                        updateData={(data) => updateFormData('exhibitorInfo', data)}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                    />
                );
            default:
                return null;
        }
    };

    return {
        step,
        isSaving,
        showModal,
        formData,
        handleNext,
        handlePrev,
        handleSubmit,
        handleSuccess,
        renderStep,
        setShowModal,
    };
};

export default useExhibitorForm;
