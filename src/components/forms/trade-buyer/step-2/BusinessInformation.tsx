// src/components/forms/trade-buyer/step-2/BusinessInformation.tsx

import { BusinessInfo } from '@/interfaces/trade-buyer';
import ProgressBar from '../ProgressBar';
import IndustryRepresentation from './IndustryRepresentation';
import SupplierInformation from './SupplierInformation';
import CompanyDetails from './CompanyDetails';

interface BusinessInformationProps {
  data: BusinessInfo;
  updateData: (data: Partial<BusinessInfo>) => void;
}

const BusinessInformation: React.FC<BusinessInformationProps> = ({ data, updateData }) => {
  return (
    <section className="flex flex-col w-full max-md:max-w-full">
      <h1 className="w-full text-4xl font-bold rounded-none text-stone-800 max-md:pr-5">
        Company Details
      </h1>
      <ProgressBar current={2} total={5} />

      {/* Include Company Details */}
      <CompanyDetails data={data} updateData={updateData} />

      {/* Include Industry Representation */}
      <IndustryRepresentation
        data={{
          businessNature: data.businessNature,
          marketSegment: data.marketSegment,
          salesVolume: data.salesVolume,
        }}
        updateData={(updatedData) => updateData({ ...updatedData })}
      />

      {/* Supplier Information */}
      <SupplierInformation
        suppliers={data.suppliers}
        updateSuppliers={(suppliers) => updateData({ suppliers })}
      />
    </section>
  );
};

export default BusinessInformation;
