import {Team} from "./Team";


export class Game {
    private id: number;
    private date: Date;
    private homeTeam: Team;
    private homeTeamScore: number;
    private period: number;
    private postSeason: boolean;
    private season: number;
    private status: string;
    private time: string;
    private visitorTeam: Team;
    private visitorScore: number;

    constructor(id: number = 0,
                date: Date = new Date(),
                homeTeam: Team = new Team(),
                homeTeamScore: number = 0,
                period: number = 0,
                postSeason: boolean = false,
                season: number = 0,
                status: string = "",
                time: string = "",
                visitorTeam: Team = new Team(),
                visitorScore: number = 0) {
        this.id = id;
        this.date = date;
        this.homeTeam = homeTeam;
        this.homeTeamScore = homeTeamScore;
        this.period = period;
        this.postSeason = postSeason;
        this.season = season;
        this.status = status;
        this.time = time;
        this.visitorTeam = visitorTeam;
        this.visitorScore = visitorScore;
    }
}