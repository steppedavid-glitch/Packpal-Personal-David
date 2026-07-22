import { useCallback, useEffect, useState } from "react";

import {
    getTrip,
    updateTrip
} from "../services/storage";

export default function useTrip(id) {

    const [trip, setTrip] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const data = getTrip(id);

        setTrip(data ?? null);

        setLoading(false);

    }, [id]);

    const save = useCallback((updatedTrip) => {

        setTrip(updatedTrip);

        updateTrip(updatedTrip);

    }, []);

    return {

        trip,

        loading,

        save

    };

}