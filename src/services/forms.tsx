import React from 'react';
import * as Yup from 'yup';
import { FormikValues } from 'formik';
import { getNames } from 'country-list';

export enum FieldType {
  TEXT = 'TEXT',
  NUMERIC = 'NUMERIC',
  CHECKBOX = 'CHECKBOX',
  SELECT = 'SELECT',
  MULTI_SELECT = 'MULTI_SELECT',
  SEARCH_SELECT = 'SEARCH_SELECT',
  RADIO_BUTTON = 'RADIO_BUTTON',
  RADIO_INPUT = 'RADIO_INPUT',
  TEXT_AREA = 'TEXT_AREA',
  DATE_PICKER = ' DATE_PICKER',
}

export function getInitialValues(fields: IField[]): FormikValues {
  return fields.reduce((acc, { id, initialValue }) => {
    return {
      ...acc,
      [id]: initialValue,
    };
  }, {});
}

export function generateValidationSchema(fields: IField[]) {
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

const Input = (props: any): React.ReactElement => {
  console.log(props.field);
  return <input {...props.field} />;
};

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
      return (props: any) => <Input {...props} />;
  }
}
