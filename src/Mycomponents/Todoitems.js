import React from 'react'

export const Todoitems = ({todo}) => {
    return (
        <div>
            <h3>
         {todo.title}
         <p>{todo.desc}</p>
            </h3>
        </div>
    )
}

