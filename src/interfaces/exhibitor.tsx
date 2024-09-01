// src/interfaces/exhibitor.tsx

export interface ExhibitorInfo {
  username: string;
  businessRegisteredInPhilippines: boolean; // Changed from 'any' to 'boolean'
  pastParticipation: boolean; // Changed from 'any' to 'boolean'
  officeAddress: string;
  factoryAddress: string;
  website: string;
  mobileAppsLinked: boolean; // Changed from 'any' to 'boolean'
  philexportMember: boolean; // Changed from 'any' to 'boolean'
  financialStatement: File | null; // Changed from 'any' to 'File | null'
  mayorPermit: File | null; // Changed from 'any' to 'File | null'
  productPhotos: File[]; // Changed from 'boolean' to 'File[]'
  philexportDocument: File | null; // Added this property
  participatingIn: string;
  participatingAs: string;
  participationPackage: string;
  boothSizeRequirement: string;
  spaceBoothCost: string;
  fameSubscriptionFee: string;
  packageCostEstimate: string;
  promotionalName: string;
  majorityProductsShowcased: string;
  boothOption: string;
  philexportMembership: string;
  packagingName: string;
  boothSize: string;
  boothName: string;
  productCategory: string;
  brandStoryOption: string;
  brandStoryWriteup: string;
  yearEstablished: string;
  businessPermitValidity: string;
  industryAffiliation: string;
  businessMobile: string;
  companySize: string;
  directWorkers: string;
  indirectWorkers: string;
  organizationType: string;
  natureOfBusiness: string;
  tradeExperience: string;
  exportCountries: string;
  orderTypes: string[]; // Changed from 'never[]' to 'string[]'
  marketSegment: string;
  homeDecorCategories: string[]; // Changed from 'never[]' to 'string[]'
  facebook: string;
  instagram: string;
  twitter: string;
  linkedin: string;
  directory: string;
  firstName: string;
  middleInitial: string;
  lastName: string;
  gender: string;
  designation: string;
  mobileNumber: string;
  viber: boolean;
  weChat: boolean;
  whatsApp: boolean;
  emailAddress: string;
  phoneNumber: string;
  sameAsOfficeAddress: boolean;
  noFactoryAddress: boolean;
  country: string | number | readonly string[] | undefined;
  region: string | number | readonly string[] | undefined;
  province: string | number | readonly string[] | undefined;
  city: string | number | readonly string[] | undefined;
  zipCode: string;
  street: string;
  companyName: string;
  email: string;
  contactPerson: string;
  password: string;
  confirmPassword: string;
  edition: string;
  agreeToTerms: boolean;
  event: string;
  participationType: string;
}
