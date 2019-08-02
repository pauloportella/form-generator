import React from 'react';
import { FormField } from '../FormField/FormField';
import { getField, FieldType } from '../../services/forms';
import { FormikProps } from 'formik';

export interface IFormFieldsProps {
  fields: IField[];
  formikProps: FormikProps<any>;
  isUpdate: boolean;
}

export function FormFields({
  fields,
  formikProps,
  isUpdate,
}: IFormFieldsProps): React.ReactElement {
  const { values, handleChange, handleBlur } = formikProps;

  return (
    <>
      {fields.map(
        ({
          id,
          label,
          fieldType = FieldType.TEXT,
          options,
          // multiline = false,
          type,

          disableOnUpdate = false,
        }) => {
          // const isSelect = Boolean(options && options.length);

          return (
            <FormField
              key={id}
              id={id}
              label={label}
              // select={isSelect}
              // multiline={multiline}
              value={values[id]}
              options={options}
              component={getField(fieldType)}
              onChange={handleChange}
              onBlur={handleBlur}
              type={type}
              disabled={isUpdate && disableOnUpdate}
            />
          );
        }
      )}
      }
    </>
  );
}
