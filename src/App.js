import './App.css';
import AddTodo from "./Components/AddTodo/AddTodo";
import TODOList from "./Components/TODOList/TODOList";
import {useState} from "react";

function App() {
    const [todoList, setTodoList] = useState([
        {
            name: 'Learn React',
            id: 'i1'
        }, {
            name: 'Learn Nodejs',
            id: 'i2'
        },
    ]);

    const createHandler = (name) => {
        setTodoList(prevState => [...prevState, {
            name,
            id: Math.random().toString()
        }]);
    }

    return (
        <div className="container">
            <AddTodo onAddTodo={createHandler}/>
            <TODOList items={todoList}/>
        </div>
    );
}

export default App;
