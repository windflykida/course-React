import React from "react";
import uuid from "uuid";

class TimeboxCreator extends React.Component {

    constructor(props) {
        super(props);
        this.titleInput = React.createRef();
        this.totalTimeInMinutesInput = React.createRef();

    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onCreate({
            id: uuid.v4(),
            title: this.titleInput.current.value,
            totalTimeInMinutes: this.totalTimeInMinutesInput.current.value,
        });

        this.titleInput.current.value = "";
        this.totalTimeInMinutesInput.current.value = "";

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="TimeboxCreator">
                <label>
                    What are you doing?
                <input
                        ref={this.titleInput}
                        type="text"
                    />
                </label><br />
                <label>
                    How long?
                <input
                        ref={this.totalTimeInMinutesInput}
                        type="number"
                    />
                </label><br />
                <button>
                    Add timebox</button>
            </form>
        )
    }

}

export default TimeboxCreator;