import {InitialState} from "./InitialState";

export interface AppProps {

}

export interface TeamSelectProps {
    teams: InitialState;
    getTeams(): void;
}