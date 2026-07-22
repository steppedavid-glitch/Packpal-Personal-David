import { useEffect, useState } from "react";

import "./AddItemModal.css";

export default function AddItemModal({

    open,

    category,

    onClose,

    onSave

}) {

    const [value, setValue] = useState("");

    useEffect(() => {

        if (open) {

            setValue("");

        }

    }, [open]);

    if (!open) {

        return null;

    }

    function handleSave() {

        const item = value.trim();

        if (!item) {

            return;

        }

        onSave(item);

        setValue("");

    }

    function handleKeyDown(event) {

        if (event.key === "Enter") {

            handleSave();

        }

        if (event.key === "Escape") {

            onClose();

        }

    }

    return (

        <div className="modal-overlay">

            <div className="modal">

                <h2>

                    Nieuw item

                </h2>

                <p>

                    {category}

                </p>

                <input

                    autoFocus

                    placeholder="Bijvoorbeeld: T-shirt"

                    value={value}

                    onChange={(e) =>

                        setValue(e.target.value)

                    }

                    onKeyDown={handleKeyDown}

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

                        Toevoegen

                    </button>

                </div>

            </div>

        </div>

    );

}