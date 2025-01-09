export interface IInput {
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  validators?: { validator: (_: string) => boolean; errorMessage: string }[];
  className?: string;
  onChange?: (value: string | number | boolean) => void;
  required?: boolean;
}

export interface IFileInput {
  placeholder: string;
  onChange?: (_: string) => unknown;
}

export interface IInputValues {
  CompanyName: string;
  Bussiness: string;
  Address: string;
  Postcode: number;
  Name: string;
  Phone: number;
  Email: string;
  Linkedin: string;
  YourIdea: string;
  File: string;
  Checkbox: boolean;
}
