import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Yup from 'yup';
import { getInitialValues } from '../src/services/forms';
import { Form } from '../.';

const Input = (props: any): React.ReactElement => {
  return <input {...props.field} />;
};

const fields = [
  {
    component: Input,
    id: 'buyerName',
    initialValue: 'Hello',
    label: 'buyerName',
    validation: Yup.string().required(),
  },
];

const initialValues = getInitialValues(fields);

const propsFn = () => ({
  title: 'Form Generatorr',
  onSubmit: (values: any) => console.log(values),
  fields: fields,
  initialValues: initialValues,
});

const App = () => {
  return (
    <div>
      <Form {...propsFn()} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
