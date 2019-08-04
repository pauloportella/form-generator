import * as React from 'react';
import { Field, FormikHandlers, FormikActions } from 'formik';

export interface FormFieldProps {
  id: string;
  label: string;
  // select: boolean;
  value: Values;
  options?: IOption[];
  // multiline: boolean;
  component?: React.ReactNode;
  onChange:
    | FormikHandlers['handleChange']
    | FormikActions<Values>['setFieldValue'];
  onBlur:
    | FormikHandlers['handleBlur']
    | FormikActions<Values>['setFieldTouched'];
  type?: string;
}

export function FormField({
  id,
  label,
  type = 'text',
  component,
  value,
  // select,
  options,
  // multiline,
  onChange,
  onBlur,
}: FormFieldProps): React.ReactElement {
  const optionsJSX = options && generateOptions(options);

  return (
    <Field
      id={id}
      name={id}
      label={label}
      type={type}
      component={component}
      value={value}
      // select={select}
      // multiline={multiline}
      onChange={onChange}
      onBlur={onBlur}
    >
      {optionsJSX}
    </Field>
  );
}

function generateOptions(options: IOption[]): React.ReactNode {
  return options.map(({ label, value }, index) => (
    <option key={index} value={value} children={label} />
  ));
}
