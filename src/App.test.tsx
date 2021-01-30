import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Test App text', () => {
  it('should be teste inside App div', () => {
    const container = shallow(<App />)

    expect(container.text()).toBe('teste')
  })
})
