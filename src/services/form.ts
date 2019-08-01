import * as Yup from 'yup';
import { FormikValues } from 'formik';

export function getInitialValues(fields: IField[]): FormikValues {
  return fields.reduce((acc, { id, initialValue }) => {
    return {
      ...acc,
      [id]: initialValue,
    };
  }, {});
}

export function getValidationSchema(fields: IField[]): Yup.Schema<any> {
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
