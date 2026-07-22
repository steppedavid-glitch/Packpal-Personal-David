export function formatDate(dateString) {

    if (!dateString) return "";

    const date = new Date(dateString);

    return date.toLocaleDateString("nl-BE", {

        day: "numeric",

        month: "short",

        year: "numeric"

    });

}

export function tripDuration(startDate, endDate) {

    if (!startDate || !endDate) return "";

    const start = new Date(startDate);

    const end = new Date(endDate);

    const days = Math.ceil(

        (end - start) / (1000 * 60 * 60 * 24)

    ) + 1;

    return `${days} dagen`;

}