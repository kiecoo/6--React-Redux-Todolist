import React from "react"
import { Provider } from "react-redux"
import { HashRouter, Route } from "react-router-dom"
import { TopBlock } from "../TopBlock"
import { MyTasks } from "../MyTasks"
import { ImportantTasks } from "../ImportantTasks"
import { Completed } from "../Completed"
import { todoStore } from "../../store"
import {removeTodoList} from "../../actions"

class Main extends React.Component {
    render() {
        return (
            <Provider store={todoStore}>
                <HashRouter>                   
                    <div class="alignCenter">
                        <div class="fullscreen-header">
                            <img src="https://i.imgur.com/A2wt2Ty.png" />
                        </div>
                        <TopBlock />
                        <Route exact path="/" component={MyTasks} />
                        <Route exact path="/important" component={ImportantTasks} />
                        <Route exact path="/completed" component={Completed} />
                    </div>
                </HashRouter>
            </Provider>
        )
    }
}

export { Main }