import * as React from 'react';
import { FormFields } from 'components';
import { Formik, Form as FormikForm, FormikActions, FormikProps } from 'formik';
import { generateValidationSchema } from 'services/forms';

export interface IFormProps {
  title: string;
  legend?: string;
  // submitText: string;
  // cancelText: string;
  onSubmit: (arg0?: any) => void;
  // onCancel: (arg0?: any) => void;
  fields: IField[];
  initialValues: any;
  isUpdate: boolean;
}
export function Form({
  title,
  // legend,
  fields,
  onSubmit,
  initialValues,
  isUpdate,
}: IFormProps): React.ReactElement {
  const validationSchema = generateValidationSchema(fields);

  function handleSubmit(values: any, actions: FormikActions<any>) {
    onSubmit(values);
    actions.setSubmitting(false);
  }
  return (
    <>
      <h1 data-testid="title">{title}</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        render={(props: FormikProps<any>) => {
          return (
            <FormikForm>
              <FormFields
                fields={fields}
                formikProps={props}
                isUpdate={isUpdate}
              />
            </FormikForm>
          );
        }}
      />
    </>
  );
}
