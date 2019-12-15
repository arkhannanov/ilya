import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import headerReducer from "./header-reducer";
import createSagaMiddleware from "redux-saga";
import { reducer as formReducer } from 'redux-form';
import loginReducer from "./login-reducer";
import articlesReducer from "./articles-reducer";

let reducers = combineReducers({
  header: headerReducer,
  login: loginReducer,
  form: formReducer,
  articles: articlesReducer
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(sagaMiddleware)));
window.__store__ = store;

export default store;