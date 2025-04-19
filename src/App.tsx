import React from 'react';
import {Provider} from 'react-redux';
import {store} from './stores/store';
import {HomeScreen} from './pages/HomeScreen';

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
