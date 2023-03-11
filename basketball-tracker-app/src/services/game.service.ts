import axios from "axios";
import moment, {Moment} from "moment";
import {Game} from "../common/models/Game";

export const getGamesAsync = async (url: string, teamIds: string[]): Promise<Game[]> => {
    let games: Game[] = [];
    let dates: string[] = [];
    let totalDays: number = 1;
    let startDate: string;
    let endDate: Moment = moment();

    while (totalDays > 0 && totalDays <= 12) {
        startDate = endDate.format("YYYY-MM-DD");
        dates.push(startDate);
        endDate.subtract(1, "days");
        totalDays++;
    }

    console.log(dates);

    await axios.get(url, {
        params: {
            team_ids: teamIds,
            dates,
        }
    }).then(response => games = response.data);

    return games;
}