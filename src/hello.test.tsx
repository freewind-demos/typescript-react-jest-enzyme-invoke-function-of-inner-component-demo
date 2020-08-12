import React from 'react';
import Hello from '../src/hello';
import {shallow} from 'enzyme';

describe('<Hello />', () => {

  it('renders to html including inner components', () => {
    const wrapper = shallow(<Hello fruit={['AAA', 'BBB']}/>);
    expect(wrapper).toHaveHTML(`<div><h1>Hello, I like:</h1><div><div>Box: AAA</div><button title="delete">Delete</button></div><div><div>Box: BBB</div><button title="delete">Delete</button></div></div>`)
  });

  it('shows fruit names', () => {
    const wrapper = shallow(<Hello fruit={['AAA', 'BBB']}/>);
    // can find text in the component itself
    expect(wrapper).toIncludeText("Hello, I like:")

    // but can't find it in the inner components
    // Notice `should.not`
    expect(wrapper).not.toIncludeText('Box: AAA');
  });

  it('calls onFruitDelete if deletes a fruit', () => {
    const onDeleteFruit = jest.fn();
    const wrapper = shallow(<Hello fruit={['AAA', 'BBB']} onDeleteFruit={onDeleteFruit}/>);

    // can't find "delete" button in inner components
    // wrapper.find('button[title="delete"]').first().simulate('click');
    // can't interact with inner components
    expect(onDeleteFruit).not.toBeCalled();
  });

});
