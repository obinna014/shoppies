import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';

//Root reducer from the reducer file
import rootReducer from '../reducers/index';

//Persist Config
const persistConfig = {
    key: 'root', 
    storage
}

//Our created persisted reducer using the root reducer and the persistconfig
const createdPersistReducer =  persistReducer(persistConfig, rootReducer);

//Created store using the created persist reducer.
const store = createStore(
    createdPersistReducer,
      applyMiddleware(logger, thunk)
    );

const persistor = persistStore(store)

//Exporting what we have created.
export {persistor, store}
