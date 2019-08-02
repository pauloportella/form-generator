import React from 'react';
import * as Yup from 'yup';

import { FieldType } from 'services/forms';

declare global {
  export type InitialValue = string | number | {};

  interface IFormProps {
    title: string;
    legend?: string;
    // submitText: string;
    // cancelText: string;
    onSubmit: (arg0?: any) => void;
    // onCancel: (arg0?: any) => void;
    fields: IField[];
    initialValues: any;
    isUpdate: boolean;
  }

  export enum ValidationRules {
    DEFAULT = 'DEFAULT',
    DATE = 'DATE',
    CURRENCY = 'CURRENCY',
  }

  interface IOptions {
    label: string;
    value: string;
  }

  export interface IField {
    id: string;
    label: string;
    multiline?: boolean;
    options?: IOptions[];
    initialValue?: InitialValue;
    fieldType?: FieldType;
    disableOnUpdate?: boolean;
    validation?:
      | Yup.MixedSchema
      | Yup.StringSchema
      | Yup.NumberSchema
      | Yup.BooleanSchema
      | Yup.DateSchema;
    type?: string;
  }
}
