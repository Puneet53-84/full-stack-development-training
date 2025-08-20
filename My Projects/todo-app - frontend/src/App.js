import Header from './Header';
import HomePage from './HomePage';
import Footer from './Footer';
import AddTodoPage from './AddToDoPage';
import ShowTodoPage from './ShowToDoPage';
import DoneTodoPage from './DoneToDoPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useState , useEffect} from 'react'
import {callGetAllAPI} from './BackendAPI.js'

async function fetchTodos(setTodo) {
  const todoList = await callGetAllAPI('/read-todos');
  setTodo(todoList);
}

function App() {
  // todo is a state type of arrays of object
  let [todo, setTodo] = useState([])

  // useEffect is a hook in react which call after app.js component render
  useEffect(() => {
    fetchTodos(setTodo)
  }, []);


  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path ="/" element ={<HomePage />}/>
        <Route path="/todo-add"element={<AddTodoPage todo={todo} setTodo={setTodo} />}/>
        <Route path="/todo-show"element={<ShowTodoPage todo={todo} setTodo={setTodo} />} />
        <Route path="/todo-done"element={<DoneTodoPage todo={todo} setTodo={setTodo}/>}/>
      </Routes>

      <Footer />

    </BrowserRouter>



  );
}

export default App;