import React from 'react';
import * as Yup from 'yup';

declare global {
  type InitialValue = string | number | {};

  interface IField {
    id: string;
    label: string;
    multiline?: boolean;
    options?: IOption[];
    initialValue?: InitialValue;
    component?: React.ReactNode;
    hasCustomOnChange: boolean;
    hasCustomOnBlur: boolean;
    validation?:
      | Yup.MixedSchema
      | Yup.StringSchema
      | Yup.NumberSchema
      | Yup.BooleanSchema
      | Yup.DateSchema;
    type?: string;
  }

  interface IOption {
    label: string;
    value: string;
  }
}
