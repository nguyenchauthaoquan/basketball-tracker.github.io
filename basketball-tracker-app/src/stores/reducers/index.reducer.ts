import {combineReducers} from "redux";
import teamsReducer from "./teams.reducer";

const reducer = combineReducers({
    teams: teamsReducer,
})

export default reducer;