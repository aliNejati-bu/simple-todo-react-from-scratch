import React from "react";

import "./AddTodo.css";

const AddTodo = props => {
    return (
        <div className='add-card'>
            <div className='add-card_input'>
                <input type="text" placeholder="Enter New Item Here"/>
            </div>
            <div className='add-card__btn'>
                <button>+ add new</button>
            </div>
        </div>
    );
}

export default AddTodo;