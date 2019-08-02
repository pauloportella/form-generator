import React from 'react';
import * as Yup from 'yup';
import { FormikValues } from 'formik';
import { getNames } from 'country-list';

export function getInitialValues(fields: IField[]): FormikValues {
  return fields.reduce((acc, { id, initialValue }) => {
    return {
      ...acc,
      [id]: initialValue,
    };
  }, {});
}

export function generateValidationSchema(fields: IField[]): Yup.Schema<any> {
  const obj = fields.reduce((acc, { id, validation }) => {
    return {
      ...acc,
      [id]: validation,
    };
  }, {});

  return Yup.object().shape({
    ...obj,
  });
}

interface getValueFromOptionsProps {
  value: InitialValue;
  options?: IOptions[];
}

export function getValueFromOptions({
  value,
  options,
}: getValueFromOptionsProps): InitialValue {
  if (!options) return value;

  const result = options.find(option => option.value === value);

  if (result) return result.label;

  return value;
}

export function getCountryOptions(): IOptions[] {
  const names = getNames();
  return names.map((name: string) => ({
    label: name,
    value: name,
  }));
}

function Input(props: any): React.ReactElement {
  return <input {...props} />;
}

export function getField(type: FieldType): React.ReactNode {
  switch (type) {
    case FieldType.NUMERIC:
      return Input;
    // case FieldType.CHECKBOX:
    //   return CheckboxField;
    // case FieldType.SELECT:
    //   return TextField;
    // case FieldType.MULTI_SELECT:
    //   return MultiSelect;
    // case FieldType.SEARCH_SELECT:
    //   return Autocomplete;
    // case FieldType.RADIO_BUTTON:
    //   return RadioButton;
    // case FieldType.RADIO_INPUT:
    //   return RadioInput;
    // case FieldType.DATE_PICKER:
    //   return DatePicker;
    case FieldType.TEXT:
    default:
      return Input;
  }
}
