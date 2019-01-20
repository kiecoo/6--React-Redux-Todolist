import {createStore} from "redux"
import {todoListReducer} from "../reducers"

const todoStore = createStore(todoListReducer)

window.store = todoStore

export {todoStore}