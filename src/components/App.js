
import React from "react";

import  TimeboxList from "./TimeboxList";
import EditableTimebox from "./EditableTimebox";
import ErrorBoundry from "./ErrorBoundry";

function App() {
    return (
        <div className="App">
            <ErrorBoundry message="Coś nie działa w całej aplikacji">
            <TimeboxList />
            <EditableTimebox />
            </ErrorBoundry>
        </div>

    )
}

export default App;