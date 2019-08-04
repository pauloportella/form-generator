import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Yup from 'yup';
import { getInitialValues } from '../src/services/forms';
import { Form, IField } from '../.';

const Input = (props: any): React.ReactElement => {
  return <input {...props.field} placeholder={props.label} />;
};

console.log(IField);

const fields: IField[] = [
  {
    component: Input,
    id: 'name',
    initialValue: '',
    label: 'Name',
    validation: Yup.string().required(),
    type: 'text',
  },
  {
    component: Input,
    id: 'city',
    initialValue: '',
    label: 'City',
    validation: Yup.string().required(),
    type: 'text',
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
  return <Form {...propsFn()} />;
};

ReactDOM.render(<App />, document.getElementById('root'));
