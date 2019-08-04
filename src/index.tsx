import * as React from 'react';
import { Formik, Form as FormikForm, FormikActions, FormikProps } from 'formik';
import { generateValidationSchema } from './services/forms';
import { FormFields } from './components/FormFields/FormFields';
import { IField } from 'types';

export { IField };

export interface FormProps {
  title: string | React.ReactNode;
  legend?: string;
  onSubmit: (values: Values) => void;
  fields: IField[];
  initialValues: Values;
}

export function Form({
  title,
  fields,
  initialValues,
  onSubmit,
}: FormProps): React.ReactElement {
  const validationSchema = generateValidationSchema(fields);

  const isTitleComponent = Boolean(title);

  function handleSubmit(values: Values, actions: FormikActions<Values>) {
    onSubmit(values);
    actions.setSubmitting(false);
  }

  return (
    <>
      <div data-testid="title">
        {isTitleComponent ? title : <h1>{title}</h1>}
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        render={(props: FormikProps<Values>) => {
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
