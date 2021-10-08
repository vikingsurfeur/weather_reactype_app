/* Get Geolocalisation */

/* Import Interface Values */

import { IGeolocalisation } from "../interfaces/interfaceGeolocalisation";

/* Get Current Location By Navigator Object */

const getGeolocalisation: Function = (): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

/* Define the Latitude and Longitude */

const getLatitudeAndLongitude: Function =
    async (): Promise<IGeolocalisation | void> => {
        try {
            const currentPosition = await getGeolocalisation();
            return {
                latitude: currentPosition.coords.latitude,
                longitude: currentPosition.coords.longitude,
            };
        } catch (error) {
            return console.error(error);
        }
    };

export default getLatitudeAndLongitude;
