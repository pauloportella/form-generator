import * as React from 'react';
import { Formik, Form as FormikForm, FormikActions, FormikProps } from 'formik';
import { generateValidationSchema, getInitialValues } from './services/forms';
import { FormFields } from './components/FormFields/FormFields';
import { IField } from 'types';

export { IField, getInitialValues };

export interface FormProps {
  title: string | React.ReactNode;
  legend?: string;
  onSubmit: (values: Values) => void;
  fields: IField[];
  initialValues?: Values;
  container?: any;
  labelComponent?: any;
}

export function Form({
  title,
  fields,
  initialValues = getInitialValues(fields),
  onSubmit,
  container: Container,
  labelComponent = null,
}: FormProps): React.ReactElement {
  const validationSchema = generateValidationSchema(fields);
  const isTitleComponent = Boolean(typeof title !== 'string');

  function handleSubmit(values: Values, actions: FormikActions<Values>) {
    onSubmit(values);
    actions.setSubmitting(false);
  }

  return (
    <React.Fragment>
      {isTitleComponent ? title : <h1>{title}</h1>}

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
                <button type="submit">Submit</button>
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
