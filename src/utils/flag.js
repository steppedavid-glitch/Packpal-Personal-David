export default function getFlag(destination) {

    if (!destination) return "🧳";

    const d = destination.toLowerCase();

    if (d.includes("ital")) return "🇮🇹";
    if (d.includes("frank")) return "🇫🇷";
    if (d.includes("span")) return "🇪🇸";
    if (d.includes("port")) return "🇵🇹";
    if (d.includes("belg")) return "🇧🇪";
    if (d.includes("neder")) return "🇳🇱";
    if (d.includes("duits")) return "🇩🇪";
    if (d.includes("oosten")) return "🇦🇹";
    if (d.includes("zwitser")) return "🇨🇭";
    if (d.includes("griek")) return "🇬🇷";

    return "🧳";

}