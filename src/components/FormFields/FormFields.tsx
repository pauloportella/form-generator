import React from 'react';
import { FormField } from '../FormField/FormField';

import { FormikProps } from 'formik';

export interface FormFieldsProps {
  fields: IField[];
  formikProps: FormikProps<any>;
}

export function FormFields({
  fields,
  formikProps,
}: FormFieldsProps): React.ReactElement {
  const {
    values,
    handleChange,
    handleBlur,
    setFieldValue,
    setFieldTouched,
  } = formikProps;

  return (
    <>
      {fields.map(
        ({
          id,
          label,
          options,
          component,
          type,
          hasCustomOnChange = false,
          hasCustomOnBlur = false,
        }) => {
          const onChange = hasCustomOnChange ? setFieldValue : handleChange;
          const onBlur = hasCustomOnBlur ? setFieldTouched : handleBlur;
          // multiline = false,
          // const isSelect = Boolean(options && options.length);

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
              onChange={onChange}
              onBlur={onBlur}
              type={type}
            />
          );
        }
      )}
    </>
  );
}
