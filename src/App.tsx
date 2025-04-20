import React from 'react';
import {Provider} from 'react-redux';
import {store} from './stores/store';
import {HomeScreen} from './pages/HomeScreen';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
      <Toast />
    </Provider>
  );
};

export default App;
