import {InitialState} from "../../common/interfaces/InitialState";
import {SET_TEAMS} from "../../constants/constants";
import {TeamActions} from "../../common/types/actions";

const initialState: InitialState = {
    teams: [],
    games: [],
};

const teamsReducer = (state: InitialState = initialState, actions: TeamActions = {type: ""}) => {
    switch (actions.type) {
        case SET_TEAMS:
            return {
                ...state,
                teams: actions.payload
            }
        default:
            return state
    }
}

export default teamsReducer;