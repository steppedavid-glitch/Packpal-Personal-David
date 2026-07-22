import "./StatsCard.css";

export default function StatsCard({

    title,

    value

}){

    return(

        <div className="stats-card">

            <span>

                {title}

            </span>

            <h2>

                {value}

            </h2>

        </div>

    );

}