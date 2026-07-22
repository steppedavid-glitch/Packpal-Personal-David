import { useEffect, useMemo, useState } from "react";

import "./Dashboard.css";

import StatsCard from "../../components/StatsCard/StatsCard";
import TripCard from "../../components/TripCard/TripCard";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import Modal from "../../components/Modal/Modal";
import ConfirmDialog from "../../components/ConfirmDialog/ConfirmDialog";

import { getTrips, saveTrips } from "../../services/storage";

import uuid from "../../utils/uuid";
import createDefaultPacking from "../../utils/createDefaultPacking";

const EMPTY_TRIP = {
    title: "",
    destination: "",
    type: "vacation",
    startDate: "",
    endDate: ""
};

export default function Dashboard() {

    const [trips, setTrips] = useState([]);

    const [trip, setTrip] = useState(EMPTY_TRIP);

    const [showModal, setShowModal] = useState(false);

    const [deleteTripId, setDeleteTripId] = useState(null);

    useEffect(() => {

        setTrips(getTrips());

    }, []);

    useEffect(() => {

        saveTrips(trips);

    }, [trips]);

    function openModal() {

        setTrip(EMPTY_TRIP);

        setShowModal(true);

    }

    function closeModal() {

        setShowModal(false);

    }

    function saveTrip() {

        if (
            trip.title.trim() === "" ||
            trip.destination.trim() === ""
        ) {

            alert("Gelieve minstens een naam en bestemming in te vullen.");

            return;

        }

        const now = new Date().toISOString();

        const newTrip = {

            id: uuid(),

            title: trip.title.trim(),

            destination: trip.destination.trim(),

            type: trip.type,

            startDate: trip.startDate,

            endDate: trip.endDate,

            packingList: createDefaultPacking(trip.type),

            createdAt: now,

            updatedAt: now

        };

        setTrips(current => [

            ...current,

            newTrip

        ]);

        setShowModal(false);

        setTrip(EMPTY_TRIP);

    }

    function deleteTrip(id) {

        setDeleteTripId(id);

    }

    function confirmDeleteTrip() {

        setTrips(current =>
            current.filter(
                trip => trip.id !== deleteTripId
            )
        );

        setDeleteTripId(null);

    }

    const sortedTrips = useMemo(() => {

        return [...trips].sort(

            (a, b) =>
                new Date(a.startDate) -
                new Date(b.startDate)

        );

    }, [trips]);

    return (

        <>

            <div className="dashboard-header">

                <div className="stats-grid">

                    <StatsCard
                        title="Reizen"
                        value={trips.length}
                    />

                    <StatsCard
                        title="Volgende"
                        value={
                            sortedTrips[0]?.destination ?? "-"
                        }
                    />

                </div>

                <h2 className="dashboard-title">

                    Mijn Reizen

                </h2>

            </div>

            {

                trips.length === 0 && (

                    <div className="welcome-card">

                        <div style={{ fontSize: "60px" }}>

                            🧳

                        </div>

                        <h3>

                            Nog geen reizen

                        </h3>

                        <p>

                            Klik op de blauwe knop om je eerste reis aan te maken.

                        </p>

                    </div>

                )

            }

            {

                sortedTrips.map(trip => (

                    <TripCard

                        key={trip.id}

                        trip={trip}

                        onDelete={deleteTrip}

                    />

                ))

            }

            <FloatingButton

                onClick={openModal}

            />

            <Modal

                open={showModal}

                onClose={closeModal}

                onSave={saveTrip}

                trip={trip}

                setTrip={setTrip}

            />

            <ConfirmDialog

                open={deleteTripId !== null}

                title="Reis verwijderen"

                message="Weet je zeker dat je deze reis wilt verwijderen?"

                confirmText="Verwijderen"

                cancelText="Annuleren"

                onCancel={() => setDeleteTripId(null)}

                onConfirm={confirmDeleteTrip}

            />

        </>

    );

}