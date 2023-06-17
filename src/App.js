import './App.css';
import AddTodo from "./Components/AddTodo/AddTodo";
import TODOList from "./Components/TODOList/TODOList";

function App() {
    const todoList = [
        {
            name: 'Learn React',
            id: 'i1'
        }, {
            name: 'Learn Nodejs',
            id: 'i2'
        },
    ];
    return (
        <div className="container">
            <AddTodo/>
            <TODOList items={todoList}/>
        </div>
    );
}

export default App;
