// src/interfaces/exhibitor.tsx

export interface ExhibitorInfo {
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
  facebook: string;
  instagram: string;
  twitter: string;
  linkedin: string;
  directory: string;
  sameAsOfficeAddress: boolean;
  noFactoryAddress: boolean;
  country: string | number | readonly string[] | undefined;
  region: string | number | readonly string[] | undefined;
  province: string | number | readonly string[] | undefined;
  city: string | number | readonly string[] | undefined;
  zipCode: string;
  street: string;
  edition: string;
  agreeToTerms: boolean;
  companyName: string;
  contactPerson: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  event: string;
  participationType: string;
}
