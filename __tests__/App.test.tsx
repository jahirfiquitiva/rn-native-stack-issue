import * as React from 'react';
import '@testing-library/react-native/extend-expect';
import {screen, render} from '@testing-library/react-native';
import App from './../App';

test('Shows home screen', () => {
  render(<App />);

  expect(screen.getByText('Home')).toBeOnTheScreen();

  expect(screen.getByText('Right')).toBeOnTheScreen();

  screen.debug();
});
