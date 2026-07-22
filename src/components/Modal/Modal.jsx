import "./Modal.css";

import TRIP_TYPES from "../../config/tripTypes";

export default function Modal({

    open,

    onClose,

    onSave,

    trip,

    setTrip

}) {

    if (!open) {

        return null;

    }

    function handleSave() {

        if (

            trip.title.trim() === "" ||

            trip.destination.trim() === ""

        ) {

            alert("Gelieve minstens een naam en bestemming in te vullen.");

            return;

        }

        if (

            trip.startDate &&

            trip.endDate &&

            trip.endDate < trip.startDate

        ) {

            alert("De einddatum mag niet vóór de startdatum liggen.");

            return;

        }

        onSave();

    }

    return (

        <div className="modal-overlay">

            <div className="modal">

                <h2>Nieuwe Reis</h2>

                <input

                    autoFocus

                    placeholder="Naam van de reis"

                    value={trip.title}

                    onChange={(e) =>

                        setTrip({

                            ...trip,

                            title: e.target.value

                        })

                    }

                />

                <input

                    placeholder="Bestemming"

                    value={trip.destination}

                    onChange={(e) =>

                        setTrip({

                            ...trip,

                            destination: e.target.value

                        })

                    }

                />

                <select

                    value={trip.type}

                    onChange={(e) =>

                        setTrip({

                            ...trip,

                            type: e.target.value

                        })

                    }

                >

                    {

                        TRIP_TYPES.map(type => (

                            <option

                                key={type.key}

                                value={type.key}

                            >

                                {type.label}

                            </option>

                        ))

                    }

                </select>

                <label htmlFor="startDate">

                    📅 Startdatum

                </label>

                <input

                    id="startDate"

                    type="date"

                    value={trip.startDate}

                    onChange={(e) =>

                        setTrip({

                            ...trip,

                            startDate: e.target.value

                        })

                    }

                />

                <label htmlFor="endDate">

                    📅 Einddatum

                </label>

                <input

                    id="endDate"

                    type="date"

                    value={trip.endDate}

                    onChange={(e) =>

                        setTrip({

                            ...trip,

                            endDate: e.target.value

                        })

                    }

                />

                <div className="modal-buttons">

                    <button

                        className="cancel"

                        onClick={onClose}

                    >

                        Annuleren

                    </button>

                    <button

                        className="save"

                        onClick={handleSave}

                    >

                        Opslaan

                    </button>

                </div>

            </div>

        </div>

    );

}