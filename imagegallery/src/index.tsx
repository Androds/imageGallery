import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import albums from './reducer'
import { watchForLoadAlbums, watchForSelectAlbums } from './saga';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import sessionStorage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { Gallery } from './components/gallery/gallery';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
  stateReconciler: autoMergeLevel2
}


const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  watchForLoadAlbums,
  applyMiddleware(sagaMiddleware)
)

//const persistor = persistStore(store)
sagaMiddleware.run(watchForLoadAlbums);
//sagaMiddleware.run(watchForSelectAlbums);

export {
  store
};

ReactDOM.render(
  <Provider store={store}>    
      <Gallery />,
  </Provider >,
  document.getElementById('root')
);