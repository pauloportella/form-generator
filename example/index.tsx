import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Yup from 'yup';
import { getInitialValues } from '../src/services/forms';
import { Form, IField, FormProps } from '../.';
import { Grid } from '@material-ui/core';

const Input = (props: any): React.ReactElement => {
  return <input {...props.field} placeholder={props.label} />;
};

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
    type: 'number',
  },
];

const initialValues = getInitialValues(fields);

function title(): React.ReactElement {
  return <h2>Form Generator</h2>;
}

const Container: React.FC = ({ children }) => {
  console.log('Container loads!');
  return (
    <Grid container spacing={4}>
      {children}
    </Grid>
  );
};

const propsFn = (): FormProps => ({
  title: title(),
  onSubmit: (values: any) => console.log(values),
  fields: fields,
  initialValues: initialValues,
  container: Container,
  // container: (props: any) => <Container {...props} />,
});

const App = () => {
  return <Form {...propsFn()} />;
};

ReactDOM.render(<App />, document.getElementById('root'));
