import "./PackingItem.css";

export default function PackingItem({

    item,

    onToggle,

    onDelete

}) {

    return (

        <div className="packing-item">

            <label className="packing-item-label">

                <input

                    type="checkbox"

                    checked={item.completed}

                    onChange={() => onToggle(item.id)}

                />

                <span
                    className={
                        item.completed
                            ? "completed"
                            : ""
                    }
                >
                    {item.name}
                </span>

            </label>

            <button

                className="delete-item"

                onClick={() => onDelete(item.id)}

                aria-label="Verwijderen"

            >

                ×

            </button>

        </div>

    );

}