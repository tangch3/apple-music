import React from 'react';
import About from '../pages/about.js'
import renderer from 'react-test-renderer'


test('renders without crashing', () => {
    const tree = renderer.create(<About/>).toJSON();
    expect(tree).toMatchSnapshot();
})