/* Get Geolocation */

/* Import Interface Values */

import { IGeoLocation } from "../interfaces/interfaceGeoLocation";

/* Get Current Location By Navigator Object */

const getGeoLocation: Function = (): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

/* Define the Latitude and Longitude */

const getLatitudeAndLongitude: Function =
    async (): Promise<IGeoLocation | void> => {
        try {
            const currentPosition = await getGeoLocation();
            return {
                latitude: currentPosition.coords.latitude,
                longitude: currentPosition.coords.longitude,
            };
        } catch (error) {
            return console.error(error);
        }
    };

export default getLatitudeAndLongitude;
