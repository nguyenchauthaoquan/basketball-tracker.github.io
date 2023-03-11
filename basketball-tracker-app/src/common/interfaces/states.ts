import {Team} from "../models/Team";
import {InitialState} from "./InitialState";

export interface AppState {
    teams: InitialState
}

export interface TeamSelectState {
    teams: Team[]
}