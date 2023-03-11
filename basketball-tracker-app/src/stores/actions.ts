import {Team} from "../common/models/Team";
import {GET_TEAMS, SET_TEAMS} from "../constants/constants";
import {TeamActions} from "../common/types/actions";
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
