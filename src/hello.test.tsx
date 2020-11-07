import {mount, shallow} from 'enzyme';
import React from 'react';

import Hello, {Inner, Middle} from './hello';

describe('<Hello />', () => {

  describe('mount', () => {
    it('renders descendant elements', () => {
      const wrapper = mount(<Hello/>);
      wrapper.find(Inner).invoke('onClick')('aaa');
      expect(wrapper.find('.data').text()).toBe('aaa');
    });
  })

  describe('shallow', () => {
    it('renders direct children elements', () => {
      const wrapper = shallow(<Hello/>);
      wrapper.find(Middle).invoke('onClick')('aaa');
      expect(wrapper.find('.data').text()).toBe('aaa');
    });

    it('does not render descendant elements', () => {
      const wrapper = shallow(<Hello/>);
      expect(wrapper.find(Inner)).toHaveLength(0)
    });
  })

});
