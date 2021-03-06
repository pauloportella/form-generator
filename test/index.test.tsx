import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Yup from 'yup';
// import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { getInitialValues } from '../src/services/forms';

import { Form, IField } from '../src';

const Input = (props: any): React.ReactElement => {
  return <input {...props.field} placeholder={props.label} />;
};

const fields: IField[] = [
  {
    component: Input,
    id: 'buyerName',
    initialValue: '',
    label: 'buyerName',
    validation: Yup.string().required(),
  },
  {
    component: Input,
    id: 'city',
    initialValue: '',
    label: 'buyerName',
    validation: Yup.string().required(),
  },
];

const initialValues = getInitialValues(fields);

const propsFn = () => ({
  title: 'Form Generator',
  onSubmit: (values: any) => console.log(values),
  fields,
  initialValues,
});

describe('Form Generator', () => {
  // it('finds title', () => {
  //   const { getByTestId, getByText } = render(<Form {...propsFn()} />);
  //   const elem = getByTestId('title');
  //   expect(elem.innerHTML).toContain('Form Generator');
  // });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Form {...propsFn()} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
