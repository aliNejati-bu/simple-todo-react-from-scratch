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

    const deleteHandler = (id) => {
        setTodoList(prevState => prevState.filter(x => x.id != id))
    }

    return (
        <div className="container">
            <AddTodo onAddTodo={createHandler}/>
            <TODOList onDelete={deleteHandler} items={todoList}/>
        </div>
    );
}

export default App;
