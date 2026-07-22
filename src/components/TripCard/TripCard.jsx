import { useNavigate } from "react-router-dom";

import "./TripCard.css";

import getFlag from "../../utils/flag";
import { formatDate, tripDuration } from "../../utils/dateUtils";

export default function TripCard({ trip, onDelete }) {

    const navigate = useNavigate();

    function handleDelete(event) {

        event.stopPropagation();

        onDelete(trip.id);

    }

    function openTrip() {

        navigate("/trip/" + trip.id);

    }

    return (

        <div
            className="trip-card"
            onClick={openTrip}
        >

            <button
                className="delete-trip"
                onClick={handleDelete}
                aria-label="Reis verwijderen"
            >
                ✕
            </button>

            <h3>

                {getFlag(trip.destination)} {trip.title}

            </h3>

            <p>

                {trip.destination}

            </p>

            <span>

                {formatDate(trip.startDate)}

                {" • "}

                {formatDate(trip.endDate)}

            </span>

            <div className="trip-duration">

                {tripDuration(

                    trip.startDate,

                    trip.endDate

                )}

            </div>

        </div>

    );

}