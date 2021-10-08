/* Import Interface Values */

import { IInitialStateDataWeather } from "../../interfaces/interfaceDataWeather";

/* Initial State of Data Weather*/

const initialStateDataWeather: IInitialStateDataWeather = {
    loading: false,
    data: [],
    error: null,
};

export default initialStateDataWeather;
