import React from "react"

const AddTodo = props => {
    return (
        <div className='add-card'>
            <div className='add-card_input'>
                <input type="text"/>
            </div>
            <div className='add-card__btn'>
                <button>add new</button>
            </div>
        </div>
    );
}

export default AddTodo;