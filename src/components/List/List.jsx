import React from "react"
import { connect } from "react-redux"
import { editTodoList } from "../../actions"
import { removeTodoList } from "../../actions"

class ConnectList extends React.Component {

    constructor(props) {
        super(props)
        this.onEditTaskTitle = this.onEditTaskTitle.bind(this)
        this.changeState = this.changeState.bind(this)
        this.changeName = this.changeName.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.onRemoveTodoList = this.onRemoveTodoList.bind(this)
        this.updateTodolist = this.updateTodolist.bind(this)
        
        this.list = React.createRef()
        this.state = {important:this.props.listData.important
            ,complete:this.props.listData.complete
            ,name:this.props.listData.name
        } 
    }

    onEditTaskTitle(event) {
        if (event.target.className.indexOf('icon') === -1 &&
            event.target.className.indexOf('taskChk') === -1) {
                this.textInput.focus();
        }
    }
    
    changeState(type) {
        switch (type) {
            case "name": {
                this.setState({ name: event.target.value },this.updateTodolist)
                break;
            }
            case "complete": {
                this.setState({ complete: window.event.target.checked },this.updateTodolist)
                break;
            }
            case "important": {
                if (this.state.important === '')
                this.setState({ important: 'Y' },this.updateTodolist)
                else
                this.setState({ important: '' },this.updateTodolist)
                break;
            }
        }
    }

    changeName(event) {
        this.setState({ name: event.target.value })
    }

    handleKeyPress(event) {
        if(event.key === 'Enter'){
          this.updateTodolist()
          swal("成功編輯！！", "", "success")
        }
    }
    
    onRemoveTodoList(){
        this.props.removeTodoList(this.props.listData.id)
    }

    updateTodolist(){
        let updateList = Object.assign({},this.props.listData)
        updateList = {...updateList,name:this.state.name,complete:this.state.complete,important:this.state.important}
        this.props.editTodoList(updateList)
    }

    render() {
        return (
            <div class="listBlock">
                <div class={' list ' + (this.state.important == 'Y' ? ' important ' : '')} onClick={this.onEditTaskTitle}>
                    <input type="checkbox" class="taskChk"
                        checked={this.state.complete}
                        onChange={this.changeState.bind(this, 'complete')} />
                    <input type="text"
                        class={' taskTitle ' +
                            (this.state.complete ? ' complete ' : '') +
                            (this.state.important ? ' important ' : '')}
                        value={this.state.name}
                        onChange={this.changeName} onKeyPress={this.handleKeyPress}
                        ref={(input) => { this.textInput = input; }}/>
                    <i class="fas fa-pen fa-lg edit"></i>
                    <i class={this.state.important == 'Y' ?
                        ' fas fa-star fa-lg iconImportant icon' : ' far fa-star fa-lg icon'}
                        onClick={this.changeState.bind(this, 'important')}></i>
                    <i class="fas fa-times fa-lg icon" onClick={this.onRemoveTodoList}></i> 
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editTodoList: todoList => dispatch(editTodoList(todoList)),
        removeTodoList: id => dispatch(removeTodoList(id))
    }
}

const List = connect(null, mapDispatchToProps)(ConnectList)

export { List }


