import { createStore, combineReducers, applyMiddleware, compose  } from "redux";
import { profileReducer } from "./profile/reducer";
import { chatsReducer } from "./chats/reducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";
import {animalsReducer} from "./animals/reducer";

const persistConfig = {
    key: "GB-messager",
    storage,
}
const rootReducer = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    animals: animalsReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);