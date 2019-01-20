import React from "react"
import {BookMark} from "../BookMark"

class TopBlock extends React.Component{
    render(){
        return(
            
            <div id="topBlock">
                <BookMark to="/" name="新品研發清單" icon="fa fa-list-ul pic_bookmark" />
                <BookMark to="/important" name="下季主推星商品" icon="fa fa-star pic_bookmark"/>
                <BookMark to="/completed" name="研發完成品項" icon="fa fa-check  pic_bookmark"/>
            </div>
        )
    }
}

export {TopBlock}