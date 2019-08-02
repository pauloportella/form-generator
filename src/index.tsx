import * as React from 'react';
import { Formik, Form as FormikForm, FormikActions, FormikProps } from 'formik';
import { generateValidationSchema } from './services/forms';
import { FormFields } from './components/FormFields/FormFields';

export function Form({
  title,
  fields,
  initialValues,
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
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100vw',
                }}
              >
                <FormFields fields={fields} formikProps={props} />
                <button type="submit">Submit</button>
              </div>
            </FormikForm>
          );
        }}
      />
    </>
  );
}
