'use client';

import useTradeBuyerForm from "@/hooks/useTradeBuyerForm";
import ThankYouModal from "@/components/ui/ThankYouModal";
import SavingState from "@/components/ui/SavingState";

const TradeBuyerRegistrationForm: React.FC = () => {
  const {
    isSaving,
    showModal,
    handleSuccess,
    renderStep,
    setShowModal,
  } = useTradeBuyerForm();

  return (
    <div className="flex flex-col min-h-screen text-gray-900">
      {isSaving ? (
        <SavingState accountType="Trade Buyer" onSuccess={handleSuccess} />
      ) : showModal ? (
        <ThankYouModal accountType="Trade Buyer" onClose={() => setShowModal(false)} />
      ) : (
        <div className="shadow-lg rounded-lg bg-white py-20">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">CREATE YOUR TRADE BUYER ACCOUNT</h1>
          {renderStep()}
        </div>
      )}
    </div>
  );
};

export default TradeBuyerRegistrationForm;
