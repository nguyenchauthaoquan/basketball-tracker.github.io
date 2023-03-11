import {Team} from "../models/Team";
import {Game} from "../models/Game";

export interface InitialState {
    teams: Team[]
    games: Game[]
}