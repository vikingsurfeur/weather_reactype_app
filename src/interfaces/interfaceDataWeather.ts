/* Interface for data weather */

/***** IInitialStateDataWeather *****/

export type IInitialStateDataWeather = {
    loading: boolean;
    data: IDataWeather | string[];
    error: null | string;
}

/***** Data of IInitialStateDataWeather *****/

export type IDataWeather = {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    current: ICurrent;
    daily: IDaily[];
}

/********** Daily Weather **********/

/**** Daily Weather of IDataWeather *****/

export interface IDaily {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: ITemp;
    feels_like: IFeelsLike;
    pressure: number;
    humidity: number;
    dew_point: number;
    wind_speed: number;
    wind_deg: number;
    weather: IDailyWeather[];
    clouds: number;
    pop: number;
    rain: number;
    uvi: number;
};

/***** Temp of Daily Weather *****/

export interface ITemp {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
}

/**** Feels Like of Daily Weather *****/

export interface IFeelsLike {
    day: number;
    night: number;
    eve: number;
    morn: number;
}

/**** Weather of Daily Weather *****/

export interface IDailyWeather {
    id: number;
    main: string;
    description: string;
    icon: string;
}


/********** Current Weather **********/

/***** Current Weather of IDataWeather *****/

export interface ICurrent {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    weather: ICurrentWeather[];
}

/***** Weather of Current Weather *****/

export interface ICurrentWeather {
    id: number;
    main: string;
    description: string;
    icon: string;
}