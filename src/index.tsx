import * as React from 'react';
// import { Formik, Form as FormikForm, FormikActions, FormikProps } from 'formik';

export interface IFormProps {
  title: string;
  legend?: string;
  // submitText: string;
  // cancelText: string;
  // onSubmit: (arg0?: any) => void;
  // onCancel: (arg0?: any) => void;
  // fields: IField[];
  // initialValues: any;
  // isUpdate: boolean;
}
export function Form({ title }: IFormProps): React.ReactElement {
  return <h1 data-testid="title">{title}</h1>;
}
