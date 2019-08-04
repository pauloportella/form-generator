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
  options?: IOption[];
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

export function getCountryOptions(): IOption[] {
  const names = getNames();
  return names.map((name: string) => ({
    label: name,
    value: name,
  }));
}
