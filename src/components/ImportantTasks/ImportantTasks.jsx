import React from "react"
import {TodoLists} from "../TodoLists"

class ImportantTasks extends React.Component{
    render(){
        return (
            <div class="InputTasksForm">
                <TodoLists page="progress" />
            </div>
        )
    }
}

export { ImportantTasks }