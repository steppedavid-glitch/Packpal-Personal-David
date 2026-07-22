const STORAGE_KEY = "packpal-trips";

function readStorage() {

    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {

        return [];

    }

    try {

        return JSON.parse(data);

    } catch (error) {

        console.error("Kon opgeslagen reizen niet laden.", error);

        return [];

    }

}

function writeStorage(trips) {

    try {

        localStorage.setItem(

            STORAGE_KEY,

            JSON.stringify(trips)

        );

        return true;

    } catch (error) {

        console.error("Kon reizen niet opslaan.", error);

        return false;

    }

}

export function getTrips() {

    return readStorage();

}

export function saveTrips(trips) {

    if (!Array.isArray(trips)) {

        console.error("saveTrips verwacht een array.");

        return false;

    }

    return writeStorage(trips);

}

export function getTrip(id) {

    return readStorage().find(

        trip => trip.id === id

    );

}

export function updateTrip(updatedTrip) {

    const trips = readStorage();

    const index = trips.findIndex(

        trip => trip.id === updatedTrip.id

    );

    if (index === -1) {

        return false;

    }

    trips[index] = {

        ...updatedTrip,

        updatedAt: new Date().toISOString()

    };

    return writeStorage(trips);

}

export function deleteTrip(id) {

    const trips = readStorage().filter(

        trip => trip.id !== id

    );

    return writeStorage(trips);

}