//inporting react-dom module
import ReactDOM from 'react-dom/client';
import {MyComponent} from './MyComponent';

//getting division tag by id 'root'
const divTag=document.getElementById('root');

//creating a root dom (document object model)
const reactdom = ReactDOM.createRoot(divTag);

//rendering component
// MyComponent is our react component
reactdom.render(<MyComponent />)