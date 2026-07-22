import "./PackingCategory.css";

import PackingItem from "../PackingItem/PackingItem";

export default function PackingCategory({

    icon: Icon,

    title,

    items = [],

    onToggle,

    onDelete,

    onAdd

}) {

    const packed = items.filter(

        item => item.completed

    ).length;

    return (

        <section className="packing-category">

            <div className="packing-header">

                <div className="packing-title">

                    <div className="packing-icon">

                        <Icon size={24} />

                    </div>

                    <div>

                        <h3>

                            {title}

                        </h3>

                        <p>

                            {packed} van {items.length} ingepakt

                        </p>

                    </div>

                </div>

                <button

                    className="add-item"

                    onClick={onAdd}

                    aria-label={`${title} toevoegen`}

                >

                    +

                </button>

            </div>

            {

                items.length === 0 && (

                    <div className="empty-category">

                        Nog geen items.

                    </div>

                )

            }

            {

                items.map(item => (

                    <PackingItem

                        key={item.id}

                        item={item}

                        onToggle={onToggle}

                        onDelete={onDelete}

                    />

                ))

            }

        </section>

    );

}