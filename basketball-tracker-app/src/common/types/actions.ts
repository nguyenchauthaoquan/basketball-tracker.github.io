import {Team} from "../models/Team";
import {Game} from "../models/Game";

export type TeamActions = {
    type: string,
    payload?: Team[]
}

export type GameActions = {
    type: string,
    payload?: Game[] | object
}