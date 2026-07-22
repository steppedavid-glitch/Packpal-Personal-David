export function getAllItems(trip) {

    if (!trip?.packingList) {

        return [];

    }

    return Object.values(

        trip.packingList

    ).flat();

}

export function getCompletedItems(trip) {

    return getAllItems(trip).filter(

        item => item.completed

    );

}

export function getTotalItems(trip) {

    return getAllItems(trip).length;

}

export function getCompletedCount(trip) {

    return getCompletedItems(trip).length;

}

export function getProgressPercentage(trip) {

    const total = getTotalItems(trip);

    if (total === 0) {

        return 0;

    }

    return Math.round(

        (getCompletedCount(trip) / total) * 100

    );

}

export function addItemToCategory(

    trip,

    category,

    name

) {

    return {

        ...trip,

        packingList: {

            ...trip.packingList,

            [category]: [

                ...(trip.packingList?.[category] ?? []),

                {

                    id: crypto.randomUUID(),

                    name: name.trim(),

                    quantity: 1,

                    completed: false

                }

            ]

        }

    };

}

export function toggleItem(

    trip,

    itemId

) {

    const packingList = {};

    Object.entries(

        trip.packingList ?? {}

    ).forEach(

        ([category, items]) => {

            packingList[category] = items.map(

                item =>

                    item.id === itemId

                        ? {

                            ...item,

                            completed: !item.completed

                        }

                        : item

            );

        }

    );

    return {

        ...trip,

        packingList

    };

}

export function deleteItem(

    trip,

    itemId

) {

    const packingList = {};

    Object.entries(

        trip.packingList ?? {}

    ).forEach(

        ([category, items]) => {

            packingList[category] = items.filter(

                item => item.id !== itemId

            );

        }

    );

    return {

        ...trip,

        packingList

    };

}