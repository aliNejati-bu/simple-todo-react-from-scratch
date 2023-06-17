import React from 'react'

import "./TODOList.css";

import TODOItem from "../TODOItem/TODOItem";

const TODOList = props => {
    return (
        <div className='todo-list'>
            {
                props.items.map(ele => <TODOItem key={ele.id} item={ele}/>)
            }
        </div>
    );
};

export default TODOList;
