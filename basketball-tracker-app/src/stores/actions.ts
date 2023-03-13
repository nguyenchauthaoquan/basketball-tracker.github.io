import {Team} from "../common/models/Team";
import {GET_GAMES, GET_TEAMS, SET_GAMES, SET_TEAMS} from "../constants/constants";
import {GameActions, TeamActions} from "../common/types/actions";
import {Game} from "../common/models/Game";

export const GetTeamsAction = () : TeamActions => {
    return {
        type: GET_TEAMS
    }
}

export const SetTeamsAction = (payload: Team[]) :TeamActions => {
    return {
        type: SET_TEAMS,
        payload
    }
}

export const GetGamesAction = (payload: object) : GameActions => {
    return {
        type: GET_GAMES,
        payload
    }
}

export const SetGamesAction = (payload: Game[]) : GameActions => {
    return {
        type: SET_GAMES,
        payload
    }
}
