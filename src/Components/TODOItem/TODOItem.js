import React from 'react'

import "./TODOItem.css";

const TODOItem = props => {
    return (

        <div className="todo-item">
            <p>{props.item.name}</p>
        </div>

    );
};

export default TODOItem;
