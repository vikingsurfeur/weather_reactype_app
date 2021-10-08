/* Import Redux Stack */

import { connect } from "react-redux";
import fetchDataWeather from "./redux/dataWeather/dataWeatherSelectors";

/* Import React Components */

import { FC, useEffect } from "react";

/* Import Interfaces Values */
import { IInitialStateDataWeather } from "./interfaces/interfaceDataWeather";

/* App Component */

const App: FC<{
    dataWeather: IInitialStateDataWeather["data"];
    fetchDataWeather: Function;
}> = ({ dataWeather, fetchDataWeather }) => {
    useEffect(() => {
        fetchDataWeather();
    }, [fetchDataWeather]);

    console.log(dataWeather);
    return (
        <div className="App">
            <h1>Hello World</h1>
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        dataWeather: state.dataWeather,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchDataWeather: () => dispatch(fetchDataWeather()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
