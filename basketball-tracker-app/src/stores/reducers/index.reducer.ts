import {combineReducers} from "redux";
import teamsReducer from "./teams.reducer";
import gamesReducer from "./games.reducer";

const reducer = combineReducers({
    teams: teamsReducer,
    games: gamesReducer
})

export default reducer;