import React from "react";

import TimeboxCreator from "./TimeboxCreator";
import Timebox from "./Timebox";
import ErrorBoundry from "./ErrorBoundry";



class TimeboxList extends React.Component {
    state = {
        timeboxes: [
            { id: "a", title: "Uczę się formularzy", totalTimeInMinutes: 15 },
            { id: "b", title: "Uczę się list", totalTimeInMinutes: 25 },
            { id: "c", title: "Uczę się komponentów niekontrolowanych", totalTimeInMinutes: 5 },
        ],
        hasError: false
    }

    


    addTimebox = (timebox) => {
        throw new Error("Nie udało sie utworzyć Timeboxa")
        this.setState(prevState => {
            const timeboxes = [timebox, ...prevState.timeboxes,];
            return { timeboxes };
        })
    }

    removeTimebox = (indexToRemove) => {
        this.setState(prevState => {
            const timeboxes = prevState.timeboxes.filter((timebox, index) => index !== indexToRemove);
            return { timeboxes };
        })
    }

    updateTimebox = (indexToUpdate, updatedTimebox) => {
        this.setState(prevState => {
            const timeboxes = prevState.timeboxes.map((timebox, index) =>
                index === indexToUpdate ? updatedTimebox : timebox
            )
            return { timeboxes };
        })
    }
    handleCreate = (createdTimebox) => {
        try {
            this.addTimebox(createdTimebox);
        } catch (error) {
            console.log("Jest błąd przy tworzeniu timeboxa:", error)
            // this.setState(hasError: true)
        }
        
    }

    render() {
        return (
            <>
                <TimeboxCreator onCreate={this.handleCreate} />
                <ErrorBoundry message="Coś się wykrzaczyło :(">
                {
                   
                    this.state.timeboxes.map((timebox, index) => (
                       
                    <Timebox
                        key={timebox.id}
                        title={timebox.title}
                        totalTimeInMinutes={timebox.totalTimeInMinutes}
                        onDelete={() => this.removeTimebox(index)}
                        onEdit={() => this.updateTimebox(index, { ...timebox, title: " Updated timebox" })}
                    />
                    
                ))}


                </ErrorBoundry>
            </>
        )
    }
}

export default TimeboxList;