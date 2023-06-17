import './App.css';
import AddTodo from "./Components/AddTodo/AddTodo";
import TODOList from "./Components/TODOList/TODOList";

function App() {
    return (
        <div className="container">
            <AddTodo/>
            <TODOList/>
        </div>
    );
}

export default App;
