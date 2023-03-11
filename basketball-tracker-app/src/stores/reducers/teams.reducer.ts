import {InitialState} from "../../common/interfaces/InitialState";
import {SET_GAMES, SET_TEAMS} from "../../constants/constants";
import {TeamActions} from "../../common/types/actions";

const initialState: InitialState = {
    teams: [],
    games: [],
};

const teamsReducer = (actions: TeamActions, state = initialState) => {
    switch (actions.type) {
        case SET_TEAMS:
            return {
                ...state,
                teams: actions.payload
            }
        case SET_GAMES:
            return {
                ...state
            }
        default:
            return state
    }
}

export default teamsReducer;