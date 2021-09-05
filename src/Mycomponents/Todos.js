import React from 'react'
import {Todoitems} from "../Mycomponents/Todoitems"

export const Todos = (props) => {
    return (
        <div className = "Container" >
            <h2>Todos List</h2>
            <Todoitems todo={props.todos[0]}/>
        </div>
    )
}
