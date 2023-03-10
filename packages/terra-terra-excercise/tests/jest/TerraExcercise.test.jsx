import React from 'react';
import TerraExcercise from '../../src/TerraExcercise';

describe('TerraExcercise', () => {
  const defaultRender = <TerraExcercise />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.terra-excercise').text()).toEqual('default');
  });

  // Structure Tests
  it('should have the class terra-excercise', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('terra-excercise');
  });
});
