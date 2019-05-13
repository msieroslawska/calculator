import React from 'react';
import Result from '../components/Result';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const component = renderer
    .create(<Result value="0" />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});