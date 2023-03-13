import {InitialState} from "../../common/interfaces/InitialState";
import {GameActions} from "../../common/types/actions";
import {SET_GAMES} from "../../constants/constants";

const intialState: InitialState = {
    teams: [],
    games: []
}

const gamesReducer = (state: InitialState = intialState, actions: GameActions = {type: ""}) => {
    switch (actions.type) {
        case SET_GAMES:
            return {
                ...state,
                games: actions.payload
            }
        default:
            return state
    }
}

export default gamesReducer;