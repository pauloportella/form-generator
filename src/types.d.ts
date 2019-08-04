import React from 'react';
import * as Yup from 'yup';

declare global {
  type Values = string | number | {};

  interface IOption {
    label: string;
    value: string;
  }
}

export interface IField {
  id: string;
  label: string;
  placeholder?: string;
  multiline?: boolean;
  options?: IOption[];
  initialValue?: Values;
  component?: React.ReactNode;
  gridItem?: any;
  hasCustomOnChange?: boolean;
  hasCustomOnBlur?: boolean;
  validation?:
    | Yup.MixedSchema
    | Yup.StringSchema
    | Yup.NumberSchema
    | Yup.BooleanSchema
    | Yup.DateSchema;
  type?: string;
}
