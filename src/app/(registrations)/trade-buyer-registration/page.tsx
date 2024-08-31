'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';
import { FormData } from "@/interfaces/trade-buyer";

import BuyerRegistrationForm from "@/components/forms/trade-buyer/step-1/BuyerRegistrationForm";
import BusinessInformation from "@/components/forms/trade-buyer/step-2/BusinessInformation";
import ProductCategory from "@/components/forms/trade-buyer/step-3/ProductCategory";
import ParticipationDetailsForm from "@/components/forms/trade-buyer/step-4/ParticipationDetails";
import BuyerInformation from "@/components/forms/trade-buyer/step-5/BuyerInformation";
import ThankYouModal from "@/components/ui/ThankYouModal";
import SavingState from "@/components/ui/SavingState";

const TradeBuyerRegistrationForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSaving, setIsSaving] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    buyerInfo: {
      salutation: '',
      firstName: '',
      lastName: '',
      country: '',
      emailAddress: '',
      confirmEmailAddress: '',
      password: '',
      confirmPassword: '',
      companyName: '',
      designation: '',
      website: '',
      allowDataSharing: false,
      attendingFame: "",
      agreeToTerms: false,
      receiveNewsletters: false,
    },
    businessInfo: {
      officeAddress: '',
      contactNumber: '',
      purchasingRole: '',
      businessNature: '',
      marketSegment: [],
      annualSalesVolume: '',
      supplierName: '',
      salesVolume: '',
      suppliers: [],
      natureOfBusiness: ""
    },
    productCategories: [],
    participationDetails: {
      reasonsForRegistering: [],
      howDidYouLearn: [],
      socialMedia: [],
      attendedPreviousEditions: '',
    },
  });

  const updateFormData = <K extends keyof FormData>(section: K, data: Partial<FormData[K]>) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        ...data,
      },
    }));
  };

  const updateProductCategories = (categories: string[]) => {
    setFormData((prevData) => ({
      ...prevData,
      productCategories: categories,
    }));
  };

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 5));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    console.log('Form Submitted:', formData);
    setIsSaving(true); // Set saving state to true
  };

  const handleSuccess = () => {
    setIsSaving(false); // End saving state
    setShowModal(true); // Show success modal
  };

  const closeThankYouModal = () => {
    setShowModal(false);
    router.push('/'); // Redirect after closing the modal
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <BuyerRegistrationForm
            data={formData.buyerInfo}
            updateData={(data) => updateFormData('buyerInfo', data)}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        );
      case 2:
        return (
          <BusinessInformation
            data={formData.businessInfo}
            updateData={(data) => updateFormData('businessInfo', data)}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        );
      case 3:
        return (
          <ProductCategory
            selectedCategories={formData.productCategories}
            updateSelectedCategories={updateProductCategories}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        );
      case 4:
        return (
          <ParticipationDetailsForm
            data={formData.participationDetails}
            updateData={(data) => updateFormData('participationDetails', data)}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        );
      case 5:
        return (
          <BuyerInformation
            buyerInfo={formData.buyerInfo}
            companyDetails={formData.businessInfo}
            handlePrev={handlePrev}
            handleSubmit={handleSubmit} // Submit at the last step
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen text-gray-900">
      {isSaving ? (
        <SavingState accountType="Trade Buyer" onSuccess={handleSuccess} />
      ) : showModal ? (
        <ThankYouModal accountType="Trade Buyer" onClose={() => setShowModal(false)} />
      ) : (
        <div className="">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">CREATE YOUR TRADE BUYER ACCOUNT</h1>

          {renderStep()}

        </div>
      )}
    </div>

  );
};

export default TradeBuyerRegistrationForm;
