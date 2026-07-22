import "./ConfirmDialog.css";

export default function ConfirmDialog({

    open,

    title,

    message,

    confirmText = "Bevestigen",

    cancelText = "Annuleren",

    onConfirm,

    onCancel

}){

    if(!open){

        return null;

    }

    return(

        <div className="dialog-overlay">

            <div className="dialog">

                <h2>

                    {title}

                </h2>

                <p>

                    {message}

                </p>

                <div className="dialog-buttons">

                    <button

                        className="secondary-button"

                        onClick={onCancel}

                    >

                        {cancelText}

                    </button>

                    <button

                        className="primary-button"

                        onClick={onConfirm}

                    >

                        {confirmText}

                    </button>

                </div>

            </div>

        </div>

    );

}