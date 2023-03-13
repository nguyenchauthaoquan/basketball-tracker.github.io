import {InitialState} from "./InitialState";
import {Game} from "../models/Game";

export interface GameBoardProps {
    games: Game[];
    teamIds: number[];
    open: boolean;
    getGames(ids: object): void;
}

export interface TeamSelectProps {
    teams: InitialState;
    games: InitialState;
    getTeams(): void;
    getGames(ids: object): void;
}

export interface GameDetailProps {
    games: InitialState;
    getGames(ids: object): void;
}