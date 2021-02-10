import React from 'react';
import render from 'react-test-renderer';
import Home from '../components/home';

describe('Home', () => {
  const page = render.create(<Home />).toJSON();
  test('should render without crashing', () => {
    expect(page).toMatchSnapshot();
  });
});
