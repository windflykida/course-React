import React from "react";

function TimeboxEditor(props) {

    const { title,
        totalTimeInMinutes,
        isEditable,
        onTitleChange,
        onTotalTimeInMinutesChange,
        onConfirm,
    } = props;
    return (
        <div className={`TimeboxEditor $(isEditable ? "" : "inactive")`}>
            <label>What are you doing?
                    <input
                    disabled={!isEditable}
                    value={title}
                    onChange={onTitleChange}
                    type="text"
                />
            </label><br />
            <label>
                How long?
                    <input
                    disabled={!isEditable}
                    value={totalTimeInMinutes}
                    onChange={onTotalTimeInMinutesChange}
                    type="number" />
            </label><br />
            <button
                onClick={onConfirm}
                disabled={!isEditable}
            >
                Engaged
                </button>
        </div>
    )
}

export default TimeboxEditor;