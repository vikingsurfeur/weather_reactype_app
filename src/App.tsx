/* Import Redux Stack */

import { connect } from "react-redux";
import fetchDataWeather from "./redux/dataWeather/dataWeatherSelectors";

/* Import React Components */

import { FC, useEffect } from "react";

/* Import Interfaces Values */
import { IDataWeather } from "./interfaces/interfaceDataWeather";

/* App Component */

const App: FC<{
    dataWeather: IDataWeather;
    fetchDataWeather: Function;
}> = ({ dataWeather, fetchDataWeather }) => {
    useEffect(() => {
        fetchDataWeather();
    }, [fetchDataWeather]);

    return (
        <div className="App">

        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        dataWeather: state.dataWeather.data,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchDataWeather: () => dispatch(fetchDataWeather()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
