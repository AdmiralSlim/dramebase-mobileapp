import React from 'react';
import { Provider } from 'react-redux';
import Toast from 'react-native-toast-message';
import store from './redux/store';
import Routes from './routes';

export default function Home() {
  return (
    <Provider store={store}>
      <Routes />
      <Toast />
    </Provider>
  );
}
