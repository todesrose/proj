import React from 'react';
import Calc from './Calc.js';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
   <Provider store={store}>
      <Calc />
      </Provider>
  );
}

export default App;

