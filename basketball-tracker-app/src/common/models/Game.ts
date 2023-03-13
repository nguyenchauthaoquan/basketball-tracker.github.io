import {Team} from "./Team";


export class Game {
    private _id: number;
    private _date: Date;
    private _home_team: Team;
    private _home_team_score: number;
    private _period: number;
    private _postseason: boolean;
    private _season: number;
    private _status: string;
    private _time: string;
    private _visitor_team: Team;
    private _visitor_team_score: number;


    constructor(id: number,
                date: Date,
                home_team: Team,
                home_team_score: number,
                period: number,
                postseason: boolean,
                season: number,
                status: string,
                time: string,
                visitor_team: Team,
                visitor_team_score: number) {
        this._id = id;
        this._date = date;
        this._home_team = home_team;
        this._home_team_score = home_team_score;
        this._period = period;
        this._postseason = postseason;
        this._season = season;
        this._status = status;
        this._time = time;
        this._visitor_team = visitor_team;
        this._visitor_team_score = visitor_team_score;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get date(): Date {
        return this._date;
    }

    set date(value: Date) {
        this._date = value;
    }

    get home_team(): Team {
        return this._home_team;
    }

    set home_team(value: Team) {
        this._home_team = value;
    }

    get home_team_score(): number {
        return this._home_team_score;
    }

    set home_team_score(value: number) {
        this._home_team_score = value;
    }

    get period(): number {
        return this._period;
    }

    set period(value: number) {
        this._period = value;
    }

    get postseason(): boolean {
        return this._postseason;
    }

    set postseason(value: boolean) {
        this._postseason = value;
    }

    get season(): number {
        return this._season;
    }

    set season(value: number) {
        this._season = value;
    }

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        this._status = value;
    }

    get time(): string {
        return this._time;
    }

    set time(value: string) {
        this._time = value;
    }

    get visitor_team(): Team {
        return this._visitor_team;
    }

    set visitor_team(value: Team) {
        this._visitor_team = value;
    }

    get visitor_team_score(): number {
        return this._visitor_team_score;
    }

    set visitor_team_score(value: number) {
        this._visitor_team_score = value;
    }
}