import { Pendinglist } from './Pendinglist';
import { TodoList } from './TodoList';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">
  <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-8 drop-shadow"> 📝 My To-Do App
  </h1>
      
      <TodoList />
      
      <Pendinglist />
    
    </div>
  );
}

export { App };



   