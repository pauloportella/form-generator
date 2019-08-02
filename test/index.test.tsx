import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  render,
  // fireEvent,
  // wait
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Form } from '../src';

const propsFn = () => ({
  title: 'Form Generator',
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
