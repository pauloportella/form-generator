import * as React from 'react';
import { Formik, Form as FormikForm, FormikActions, FormikProps } from 'formik';
import { generateValidationSchema } from './services/forms';
import { FormFields } from './components/FormFields/FormFields';

export function Form({
  title,
  fields,
  initialValues,
  isUpdate,
  onSubmit,
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
