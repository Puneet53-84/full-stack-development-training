import Header from "./Header";
import HomePage from "./HomePage";
import AddTask from "./AddToDoPage";
import ShowTask from "./ShowToDo";
import DoneTask from "./DoneToDoPage";
import Footer from "./Footer";

function App() {
  return (
    <div>

      <Header />
      
      <HomePage />
      
      <AddTask />
      
      <ShowTask />
      
      <DoneTask />
      
      <Footer />
    
    </div>
  );
}

export default App;