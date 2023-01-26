import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';

import './index.css';
import App from 'App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App/>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
