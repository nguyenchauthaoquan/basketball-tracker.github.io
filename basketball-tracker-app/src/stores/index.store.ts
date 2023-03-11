import {applyMiddleware, createStore} from "redux";
import reducer from "./reducers/index.reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleWare from "redux-saga";
import {getTeamsMiddleware} from "./middlewares/teams.saga";

const sagaMiddleware = createSagaMiddleWare();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(getTeamsMiddleware)
export default store;