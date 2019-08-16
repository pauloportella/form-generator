import * as React from 'react';
import { Formik, Form as FormikForm, FormikActions, FormikProps } from 'formik';
import { generateValidationSchema, getInitialValues } from './services/forms';
import { FormFields } from './components/FormFields/FormFields';
import { IField } from 'types';

export { IField, getInitialValues };

export interface FormProps {
  title: any;
  onSubmit: (values: Values) => void;
  fields: IField[];
  initialValues?: Values;
  container?: any;
  labelComponent?: any;
  buttonComponent?: any;
}

export function Form({
  title,
  fields,
  initialValues = fields && getInitialValues(fields),
  onSubmit,
  container: Container,
  labelComponent = null,
  buttonComponent = null,
}: FormProps): React.ReactElement {
  const validationSchema = generateValidationSchema(fields);
  const hasTitleComponent = Boolean(typeof title !== 'string');
  const hasButtonComponent = Boolean(buttonComponent);

  function handleSubmit(values: Values, actions: FormikActions<Values>) {
    onSubmit(values);
    actions.setSubmitting(false);
  }

  return (
    <React.Fragment>
      {hasTitleComponent ? title() : <h1>{title}</h1>}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        render={(props: FormikProps<Values>) => {
          return (
            <FormikForm>
              <Container>
                <FormFields
                  fields={fields}
                  formikProps={props}
                  labelComponent={labelComponent}
                />

                {hasButtonComponent ? (
                  buttonComponent()
                ) : (
                  <button
                    type="submit"
                    style={{ marginTop: 12, marginBottom: 12 }}
                  >
                    Submit
                  </button>
                )}
              </Container>
            </FormikForm>
          );
        }}
      />
    </React.Fragment>
  );
}

const ContainerBase: React.FC = ({ children }) => <>{children}</>;

Form.defaultProps = {
  container: ContainerBase,
};
