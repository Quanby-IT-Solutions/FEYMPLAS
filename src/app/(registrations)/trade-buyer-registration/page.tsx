'use client';

import { useState } from "react";
import { FormData, BuyerInfo, BusinessInfo, ParticipationDetails } from "@/interfaces/trade-buyer";

import NavigationButtons from "@/components/forms/trade-buyer/NavigationButtons";
import BuyerRegistrationForm from "@/components/forms/trade-buyer/step-1/BuyerRegistrationForm";
import BusinessInformation from "@/components/forms/trade-buyer/step-2/BusinessInformation";
import ProductCategory from "@/components/forms/trade-buyer/step-3/ProductCategory";
import ParticipationDetailsForm from "@/components/forms/trade-buyer/step-4/ParticipationDetails";
import { BuyerInformation } from "@/components/forms/trade-buyer/step-5/BuyerInformation";

const TradeBuyerRegistrationForm: React.FC = () => {
  const [step, setStep] = useState(1);

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
    // Add form submission logic here
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <BuyerRegistrationForm data={formData.buyerInfo} updateData={(data) => updateFormData('buyerInfo', data)} />;
      case 2:
        return <BusinessInformation data={formData.businessInfo} updateData={(data) => updateFormData('businessInfo', data)} />;
      case 3:
        return (
          <ProductCategory
            selectedCategories={formData.productCategories}
            updateSelectedCategories={updateProductCategories}
          />
        );
      case 4:
        return <ParticipationDetailsForm data={formData.participationDetails} updateData={(data) => updateFormData('participationDetails', data)} />;
      case 5:
        return <BuyerInformation buyerInfo={formData.buyerInfo} companyDetails={formData.businessInfo} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-900">
      <div className="w-full max-w-4xl shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-center">CREATE YOUR TRADE BUYER ACCOUNT</h1>

        {renderStep()}

        <NavigationButtons
          handlePrev={handlePrev}
          handleNext={step === 5 ? handleSubmit : handleNext}
          isSubmit={step === 5}
        />
      </div>
    </div>
  );
};

export default TradeBuyerRegistrationForm;
