import React from 'react';
import { Field, FormikHandlers } from 'formik';

export interface IFormFieldProps {
  id: string;
  label: string;
  select: boolean;
  value: any;
  options?: any[];
  multiline: boolean;
  component: React.ReactNode;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
  type?: string;
  inputProps?: any;
  disabled: boolean;
}

function SingleField({
  id: label,
  select,
  value,
  options,
  multiline,
  component,
  onChange,
  onBlur,
  type,
  inputProps,
  disabled,
}: IFormFieldProps): React.ReactElement {
  return;
}
