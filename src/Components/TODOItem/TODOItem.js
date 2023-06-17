import React from 'react'

import "./TODOItem.css";

const TODOItem = props => {
    const deleteHandler = ev => {
        props.onDelete(props.item.id);
    }
    return (
        <div onClick={deleteHandler} className="todo-item">
            <p>{props.item.name}</p>
        </div>

    );
};

export default TODOItem;
