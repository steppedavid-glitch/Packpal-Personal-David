import "./ProgressBar.css";

export default function ProgressBar({

    completed,

    total

}) {

    const percentage =

        total === 0

            ? 0

            : Math.round(

                (completed / total) * 100

            );

    return (

        <div className="progress">

            <div className="progress-header">

                <span>

                    Packing voortgang

                </span>

                <span>

                    {completed} / {total}

                </span>

            </div>

            <div className="progress-track">

                <div

                    className="progress-fill"

                    style={{

                        width: percentage + "%"

                    }}

                />

            </div>

            <div className="progress-percentage">

                {percentage}%

            </div>

        </div>

    );

}