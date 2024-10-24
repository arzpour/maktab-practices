export enum GenderEnum {
  female = "female",
  male = "male",
}

export enum ResidenceStatusEnum {
  residence = "residence",
  nonResidence = "nonResidence",
}

export enum MaritalStatusEnum {
  single = "single",
  married = "married",
  widowed = "widowed",
}
export enum PaymentDetailEnum {
  cash = "cash",
  debitCard = "debitCard",
  creditCard = "creditCard",
}

export type TForm = {
  fullName: string;
  gender: GenderEnum;
  birthDate: string;
  birthPlace: string;
  nationality: string;
  religion: string;
  residenceStatus: ResidenceStatusEnum;
  maritalStatus: MaritalStatusEnum;
  nationalIdNo: string;
  tinNo: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
  email: string;
  serviceName: string;
  payment: PaymentDetailEnum;
  comment: string;
};
