import {ReactNode} from "react";

export interface RouteItem {
    path?: string;
    index: boolean;
    element?: ReactNode;
}