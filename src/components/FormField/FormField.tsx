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

export function FormField({
  id,
  label,
  type = 'text',
  component,
  value,
  select,
  options,
  multiline,
  onChange,
  onBlur,
  inputProps,
  disabled,
}: IFormFieldProps): React.ReactElement {
  const optionsJSX = options && generateOptions(options);

  return (
    <React.Fragment key={id}>
      <Field
        {...inputProps}
        id={id}
        name={id}
        label={label}
        type={type}
        component={component}
        value={value}
        select={select}
        multiline={multiline}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
      >
        {optionsJSX}
      </Field>
    </React.Fragment>
  );
}

function generateOptions(options: IOptions[]) {
  return options.map(({ label, value }, index) => (
    <option key={index} value={value} children={label} />
  ));
}
