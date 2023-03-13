import {getGamesAsync} from "../../services/game.service";
import {Game} from "../../common/models/Game";
import {GET_GAMES} from "../../constants/constants";
import {SetGamesAction} from "../actions";

const effects = require("redux-saga/effects")

function* getGames(ids: {type: string, payload: number[]}) {
    const url = "/games";

    let games: Game[] = yield effects.call(getGamesAsync, url, ids.payload);

    yield effects.put(SetGamesAction(games));
}

export function* getGamesMiddleware() {
    yield effects.takeLatest(GET_GAMES, getGames)
}