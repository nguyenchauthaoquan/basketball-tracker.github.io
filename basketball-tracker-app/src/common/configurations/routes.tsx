import {RouteItem} from "../interfaces/RouteItem";
import Home from "../../pages/Home";

export const routes: RouteItem[] = [
    {
        path: "/",
        element: <Home />
    }
]

export default routes