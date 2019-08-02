import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Yup from 'yup';
import { Form } from '../.';
import { getInitialValues, FieldType } from '../src/services/forms';

const Input = (props: any): React.ReactElement => {
  console.log(props.field);
  return <input {...props.field} />;
};

const fields = [
  {
    component: Input,
    disableOnUpdate: true,
    fieldType: FieldType.TEXT,
    id: 'buyerName',
    initialValue: 'Hello',
    label: 'buyerName',
    validation: Yup.string().required(),
  },
];

const initialValues = getInitialValues(fields);

const propsFn = () => ({
  title: 'Form Generator Demo',
  onSubmit: (values: any) => console.log(values),
  fields: fields,
  initialValues: initialValues,
});

const App = () => {
  console.log(propsFn());
  return (
    <div>
      <Form {...propsFn()} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
