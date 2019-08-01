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
