import {shallow} from 'enzyme';
import React from 'react';

import Hello, {Inner} from './hello';

describe('<Hello />', () => {

  it('calls onFruitDelete if deletes a fruit', () => {
    const wrapper = shallow(<Hello/>);
    wrapper.find(Inner).invoke('onClick')('aaa');
    expect(wrapper.find('.data').text()).toBe('aaa');
  });

});
