interface MyLocationResponse {
    latitud: number;
    longitud: number;
}

/**=========================================
 * GET MY LOCATION FUNCTION
 * @returns {Promise<MyLocationResponse>}
============================================*/
export const getMyLocation = async (): Promise<MyLocationResponse> => {

    return new Promise((resolve, reject) => {

        if ("geolocation" in navigator) {

            // THE BROWSER SUPPORTS THE GEOLOCATION API //
            navigator.geolocation.getCurrentPosition((position) => {

                // SUCCESS IN OBTAINING THE LOCATION //
                const latitud = position.coords.latitude;
                const longitud = position.coords.longitude;
                resolve({ latitud, longitud }); // SOLVE THE PROMISE WITH THE COORDINATES //

            }, (error) => {

                // ERROR OBTAINING LOCATION
                reject(`Error obtaining the location: ${error.message}`); // REJECTS THE PROMISE WITH ERROR //

            });

        } else {

            // BROWSER DOES NOT SUPPORT GEOLOCATION API //
            reject("Geolocation is not supported in this browser.");

        }

    });

}