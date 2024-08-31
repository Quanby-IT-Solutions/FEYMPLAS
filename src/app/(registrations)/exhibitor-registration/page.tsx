'use client';

import useExhibitorForm from "@/hooks/useExhibitorForm";
import ThankYouModal from "@/components/ui/ThankYouModal";
import SavingState from "@/components/ui/SavingState";

const ExhibitorRegistrationForm: React.FC = () => {
  const {
    isSaving,
    showModal,
    handleSuccess,
    renderStep,
    setShowModal,
  } = useExhibitorForm();

  return (
    <div className="flex flex-col min-h-screen text-gray-900">
      {isSaving ? (
        <SavingState accountType="Exhibitor" onSuccess={handleSuccess} />
      ) : showModal ? (
        <ThankYouModal accountType="Exhibitor" onClose={() => setShowModal(false)} />
      ) : (
        <div className="shadow-lg rounded-lg bg-white py-20">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">CREATE YOUR EXHIBITOR ACCOUNT</h1>
          {renderStep()}
        </div>
      )}
    </div>
  );
};

export default ExhibitorRegistrationForm;
