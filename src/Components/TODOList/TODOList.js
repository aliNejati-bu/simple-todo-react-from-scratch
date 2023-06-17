import React from 'react'

import "./TODOList.css";

import TODOItem from "../TODOItem/TODOItem";

const TODOList = props => {
    return (
        <div className='todo-list'>
            <TODOItem/>
            <TODOItem/>
            <TODOItem/>
            <TODOItem/>
            <TODOItem/>
        </div>
    );
};

export default TODOList;
