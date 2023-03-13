import reducer from "./reducers/index.reducer";
import createSagaMiddleWare from "redux-saga";
import {getTeamsMiddleware} from "./middlewares/teams.saga";
import {getGamesMiddleware} from "./middlewares/game.saga";
import {configureStore} from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleWare();
const store = configureStore({
    reducer,
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(getGamesMiddleware)
sagaMiddleware.run(getTeamsMiddleware)

export default store;