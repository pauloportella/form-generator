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
  container?: any;
}

export function Form({
  title,
  fields,
  initialValues,
  onSubmit,
  container: Container,
}: FormProps): React.ReactElement {
  const validationSchema = generateValidationSchema(fields);
  const isTitleComponent = Boolean(typeof title !== 'string');

  function handleSubmit(values: Values, actions: FormikActions<Values>) {
    onSubmit(values);
    actions.setSubmitting(false);
  }

  return (
    <ContainerBase>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        render={(props: FormikProps<Values>) => {
          return (
            <FormikForm>
              <Container>
                <div data-testid="title">
                  {isTitleComponent ? title : <h1>{title}</h1>}
                </div>
                <FormFields fields={fields} formikProps={props} />
                <button type="submit">Submit</button>
              </Container>
            </FormikForm>
          );
        }}
      />
    </ContainerBase>
  );
}

const ContainerBase: React.FC = ({ children }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100vw',
      height: '100vh',
    }}
  >
    {children}
  </div>
);

Form.defaultProps = {
  container: ContainerBase,
};
