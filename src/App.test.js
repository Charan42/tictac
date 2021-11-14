import React from 'react';
import { render } from '@testing-library/react';
import Enzyme, {mount} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';


import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

test('renders learn react link', () => {

  const app = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
  // console.log(app)

//   expect(getByText(/learn/i)).toBeInTheDocument();
});
