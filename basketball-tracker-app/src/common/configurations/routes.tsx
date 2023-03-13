import {RouteItem} from "../interfaces/RouteItem";
import Home from "../../pages/Home";
import GameDetail from "../../pages/GameDetail";

export const routes: RouteItem[] = [
    {
        path: "/",
        index: true,
        element: <Home />
    },
    {
        path: "/results/:teamCode",
        index: false,
        element: <GameDetail />
    }
]

export default routes