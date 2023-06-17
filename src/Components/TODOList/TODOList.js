import React from 'react'

import "./TODOList.css";

import TODOItem from "../TODOItem/TODOItem";

const TODOList = props => {
    const deleteHandler = id => {
        props.onDelete(id);
    };
    let content;
    if (props.items.length == 0) {
        content = <p>List Is Empty.</p>
    } else {
        content = <div className='todo-list'>
            {
                props.items.map(ele => <TODOItem onDelete={deleteHandler} key={ele.id} item={ele}/>)
            }
        </div>;
    }
    return (
        content
    );
};

export default TODOList;
