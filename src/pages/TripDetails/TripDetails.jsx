import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./TripDetails.css";

import useTrip from "../../hooks/useTrip";

import {
    PACKING_CATEGORIES
} from "../../config/packingCategories";

import {
    getCompletedCount,
    getTotalItems,
    addItemToCategory,
    toggleItem,
    deleteItem
} from "../../utils/tripHelpers";

import StatsCard from "../../components/StatsCard/StatsCard";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import PackingCategory from "../../components/PackingCategory/PackingCategory";
import AddItemModal from "../../components/AddItemModal/AddItemModal";
import ConfirmDialog from "../../components/ConfirmDialog/ConfirmDialog";

export default function TripDetails() {

    const navigate = useNavigate();

    const { id } = useParams();

    const {
        trip,
        loading,
        save
    } = useTrip(id);

    const [addOpen, setAddOpen] = useState(false);

    const [selectedCategory, setSelectedCategory] = useState(null);

    const [deleteId, setDeleteId] = useState(null);

    if (loading) {

        return (
            <div className="trip-details">
                Laden...
            </div>
        );

    }

    if (!trip) {

        return (
            <div className="trip-details">

                <h1>Reis niet gevonden</h1>

                <button
                    className="back-button"
                    onClick={() => navigate("/")}
                >
                    Terug
                </button>

            </div>
        );

    }

    const completed = getCompletedCount(trip);

    const total = getTotalItems(trip);

    function handleToggle(itemId) {

        save(
            toggleItem(
                trip,
                itemId
            )
        );

    }

    function handleAdd(name) {

        save(
            addItemToCategory(
                trip,
                selectedCategory,
                name
            )
        );

        setSelectedCategory(null);

        setAddOpen(false);

    }

    function handleDelete() {

        save(
            deleteItem(
                trip,
                deleteId
            )
        );

        setDeleteId(null);

    }

    function openCategory(category) {

        setSelectedCategory(category);

        setAddOpen(true);

    }

    return (

        <div className="trip-details">

            <div className="trip-header">

                <div className="trip-header-left">

                    <button
                        className="back-button"
                        onClick={() => navigate("/")}
                    >
                        ←
                    </button>

                    <div className="trip-title">

                        <h1>{trip.title}</h1>

                        <p>{trip.destination}</p>

                    </div>

                </div>

            </div>

            <div className="trip-stats">

                <StatsCard
                    title="Items"
                    value={total}
                />

                <StatsCard
                    title="Ingepakt"
                    value={completed}
                />

                <StatsCard
                    title="Resterend"
                    value={total - completed}
                />

            </div>

            <div className="trip-progress">

                <ProgressBar
                    completed={completed}
                    total={total}
                />

            </div>

            <div className="trip-categories">

                {PACKING_CATEGORIES.map(category => {

                    const packingItems =
                        trip.packingList?.[category.key] ?? [];

                    return (

                        <PackingCategory

                            key={category.key}

                            icon={category.icon}

                            title={category.title}

                            items={packingItems}

                            onToggle={handleToggle}

                            onDelete={setDeleteId}

                            onAdd={() =>
                                openCategory(category.key)
                            }

                        />

                    );

                })}

            </div>

            <AddItemModal

                open={addOpen}

                category={selectedCategory}

                onClose={() => setAddOpen(false)}

                onSave={handleAdd}

            />

            <ConfirmDialog

                open={deleteId !== null}

                title="Item verwijderen"

                message="Weet je zeker dat je dit item wilt verwijderen?"

                confirmText="Verwijderen"

                cancelText="Annuleren"

                onConfirm={handleDelete}

                onCancel={() => setDeleteId(null)}

            />

        </div>

    );

}