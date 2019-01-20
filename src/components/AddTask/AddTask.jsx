import React from "react"
import { connect } from "react-redux"
import { addTodoList } from "../../actions"

class ConnectAddTask extends React.Component {
    constructor(props) {
        super(props)
        this.changeState = this.changeState.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.state = { id: '', name: '', important: '', complete: false }
        
    }

    handleKeyPress(event) {
        if(event.key === 'Enter'){
          this.props.addTodoList(this.state)
          swal("成功新增！！", "", "success")
          this.setState({ id: '', name: '', important: '', complete: false })
        }
      }

    changeState(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div>
                <div>
                    <input id="addTask" name="name" type="text" placeholder=" Add the task    "
                        value={this.state.name}
                        onChange={this.changeState}
                        onKeyPress={this.handleKeyPress}/> 
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodoList: todoList => dispatch(addTodoList(todoList))
    }
}

const AddTask = connect(null, mapDispatchToProps)(ConnectAddTask)

export { AddTask }