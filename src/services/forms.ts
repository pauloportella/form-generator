import * as Yup from 'yup';
import { FormikValues } from 'formik';
import { IField } from 'types';

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

interface GetValueFromOptionsProps {
  value: Values;
  options?: IOption[];
}

export function getValueFromOptions({
  value,
  options,
}: GetValueFromOptionsProps): Values {
  if (!options) return value;

  const result = options.find(option => option.value === value);

  if (result) return result.label;

  return value;
}
