import React from "react"
import { connect } from "react-redux"
import { List } from "../List"

class ConnectTodoLists extends React.Component {
    render() {
        console.log(this.props.data)
        //todoCount
        let todoCount = 0
        let Lists = this.props.data.map((item) => {
            switch (this.props.page){
                case "progress":{
                    if(item.important === '')
                        return null
                    break;
                }
                case "completed":{
                    if(!item.complete)
                        return null
                    break;
                }
            }

            //the number of tasks
            if(this.props.page){
                todoCount++
            }
            else if(!item.complete){
                todoCount++
            }

            return <List key={item.id} listData={item} />
        })

        return (
            <div>
                <div>
                    {Lists}
                </div>
                <div class="countText">
                    <span>{todoCount} tasks {this.props.page? "" : "left"}</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { data: state }
}

const TodoLists = connect(mapStateToProps)(ConnectTodoLists)

export { TodoLists }