import React from 'react';
import { FormField } from '../FormField/FormField';
import { FieldType } from '../../services/forms';
import { FormikProps } from 'formik';

export interface IFormFieldsProps {
  fields: IField[];
  formikProps: FormikProps<any>;
}

export function FormFields({
  fields,
  formikProps,
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
          component,
          // multiline = false,
          type,
        }) => {
          // const isSelect = Boolean(options && options.length);
          console.log('formfields', fieldType);
          return (
            <FormField
              key={id}
              id={id}
              label={label}
              component={component}
              // select={isSelect}
              // multiline={multiline}
              value={values[id]}
              options={options}
              // component={getField(fieldType)}
              onChange={handleChange}
              onBlur={handleBlur}
              type={type}
            />
          );
        }
      )}
      }
    </>
  );
}
