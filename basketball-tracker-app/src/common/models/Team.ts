export class Team {
    private _id: number;
    private _abbreviation: string;
    private _city: string;
    private _conference: string;
    private _division: string;
    private _full_name: string;
    private _name: string;

    constructor(id: number = 0,
                abbreviation: string = "",
                city: string = "",
                conference: string = "",
                division: string = "",
                full_name: string = "",
                name: string = "") {
        this._id = id;
        this._abbreviation = abbreviation;
        this._city = city;
        this._conference = conference;
        this._division = division;
        this._full_name = full_name;
        this._name = name;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get abbreviation(): string {
        return this._abbreviation;
    }

    set abbreviation(value: string) {
        this._abbreviation = value;
    }

    get city(): string {
        return this._city;
    }

    set city(value: string) {
        this._city = value;
    }

    get conference(): string {
        return this._conference;
    }

    set conference(value: string) {
        this._conference = value;
    }

    get division(): string {
        return this._division;
    }

    set division(value: string) {
        this._division = value;
    }


    get full_name(): string {
        return this._full_name;
    }

    set full_name(value: string) {
        this._full_name = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}