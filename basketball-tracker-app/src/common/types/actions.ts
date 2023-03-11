import {Team} from "../models/Team";

export type TeamActions = {
    type: string,
    payload?: Team[]
}