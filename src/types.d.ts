import React from 'react';
import * as Yup from 'yup';

declare global {
  type InitialValue = string | number | {};

  interface IOptions {
    label: string;
    value: string;
  }

  interface IField {
    id: string;
    label: string;
    multiline?: boolean;
    options?: IOptions[];
    initialValue?: InitialValue;
    component?: React.ReactNode;
    validation?:
      | Yup.MixedSchema
      | Yup.StringSchema
      | Yup.NumberSchema
      | Yup.BooleanSchema
      | Yup.DateSchema;
    type?: string;
  }
}
