import React, {useState} from "react";

import "./AddTodo.css";

const AddTodo = props => {
    const [inputValue, setInputValue] = useState('');

    const inputChangeHandler = (ev) => {
        setInputValue(ev.target.value);
    }


    const createHandler = (ev) => {
        ev.preventDefault();
        props.onAddTodo(inputValue);
        setInputValue('');
    }

    return (
        <div className='add-card'>
            <div className='add-card_input'>
                <form onSubmit={createHandler}>
                    <input value={inputValue} onChange={inputChangeHandler} type="text"
                           placeholder="Enter New Item Here"/>
                </form>
            </div>
            <div className='add-card__btn'>
                <button onClick={createHandler}>+ add new</button>
            </div>
        </div>
    );
}

export default AddTodo;