import * as React from 'react';
import {Provider} from 'react-redux';
import {render, screen, fireEvent} from '@testing-library/react-native';
import {store} from '../src/package/store/store';
import CreationDetails from '../src/screens/CreationDetails';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
    useRoute: () => ({
      params: 4,
    }),
  };
});

describe('CreationDetails component', () => {
  test('renders correctly', () => {
    const component = (
      <Provider store={store}>
        <CreationDetails />
      </Provider>
    );

    render(component);

    const label = screen.getByTestId('visit-label');
    expect(label).toHaveTextContent('Visits');

    const counter = screen.getByTestId('counter');
    expect(counter).toBeVisible();
  });
});
