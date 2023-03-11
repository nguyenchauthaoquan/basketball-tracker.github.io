import {Team} from "../../common/models/Team";
import {getTeamsAsync} from "../../services/team.service";
import {GET_TEAMS} from "../../constants/constants";
import {SetTeamsAction} from "../actions";

const effects = require("redux-saga/effects")

function* getTeams() {
    const url = "/teams";

    let teams: Team[] = yield effects.call(getTeamsAsync, url);

    yield effects.put(SetTeamsAction(teams))
}

export function* getTeamsMiddleware() {
    yield effects.takeLatest(GET_TEAMS, getTeams)
}