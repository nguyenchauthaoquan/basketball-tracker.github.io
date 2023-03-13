import {Team} from "../common/models/Team";
import axios from "axios";

export const getTeamsAsync = async (url: string) : Promise<Team[]> => {
    let teams: Team[] = []

    await axios.get(url).then(response => teams = response.data.data);

    return teams;
}