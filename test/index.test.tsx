import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Yup from 'yup';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { getInitialValues } from '../src/services/forms';

import { Form } from '../src';
import { FieldType } from '../src/services/forms';

const fields = [
  {
    id: 'buyerName',
    label: 'buyerName',
    disableOnUpdate: true,
    fieldType: FieldType.TEXT,
    validation: Yup.string().required(),
  },
];

const initialValues = getInitialValues(fields);

const propsFn = () => ({
  title: 'Form Generator',
  onSubmit: (values: any) => console.log(values),
  fields: fields,
  initialValues: initialValues,
  isUpdate: false,
});

describe('Form Generator', () => {
  it('finds title', () => {
    const { getByTestId } = render(<Form {...propsFn()} />);
    const elem = getByTestId('title');
    expect(elem.innerHTML).toBe('Form Generator');
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Form {...propsFn()} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
