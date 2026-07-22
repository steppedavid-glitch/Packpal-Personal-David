import { Check, Trash2 } from "lucide-react";

import "./PackingItem.css";

export default function PackingItem({

    item,

    onToggle,

    onDelete

}) {

    return (

        <div

            className={

                "packing-item" +

                (item.completed ? " completed" : "")

            }

        >

            <button

                className="toggle-button"

                onClick={() => onToggle(item.id)}

                aria-label="Item afvinken"

            >

                {

                    item.completed && (

                        <Check size={18} />

                    )

                }

            </button>

            <div className="packing-item-content">

                <span className="packing-item-name">

                    {

                        item.quantity > 1

                            ? `${item.quantity}× ${item.name}`

                            : item.name

                    }

                </span>

            </div>

            <button

                className="delete-button"

                onClick={() => onDelete(item.id)}

                aria-label="Item verwijderen"

            >

                <Trash2 size={18} />

            </button>

        </div>

    );

}