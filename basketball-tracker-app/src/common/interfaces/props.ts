import {InitialState} from "./InitialState";
import {Game} from "../models/Game";

export interface GameBoardProps {
    games: Game[];
    open: boolean;
}

export interface TeamSelectProps {
    teams: InitialState;
    games: InitialState;
    getTeams(): void;
    getGames(ids: object): void;
}