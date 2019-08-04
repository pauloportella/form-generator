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

const Container: React.FC = ({ children }) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="flex-start"
      justify="center"
      style={{ width: '100%' }}
    >
      {children}
    </Grid>
  );
};

const GridItem: React.FC = ({ children }) => {
  return (
    <Grid item sm={12} md={12} lg={12}>
      {children}
    </Grid>
  );
};

const fields: IField[] = [
  {
    component: Input,
    id: 'name',
    initialValue: '',
    label: 'Name',
    validation: Yup.string().required(),
    type: 'text',
    gridItem: GridItem,
  },
  {
    component: Input,
    id: 'city',
    initialValue: '',
    label: 'City',
    validation: Yup.string().required(),
    type: 'number',
    gridItem: GridItem,
  },
];

const initialValues = getInitialValues(fields);

function title(): React.ReactElement {
  return <h1>Form Generator</h1>;
}

const propsFn = (): FormProps => ({
  title: title(),
  onSubmit: (values: any) => console.log(values),
  fields,
  initialValues,
  container: Container,
  // container: (props: any) => <Container {...props} />,
});

const App = () => {
  return <Form {...propsFn()} />;
};

ReactDOM.render(<App />, document.getElementById('root'));
