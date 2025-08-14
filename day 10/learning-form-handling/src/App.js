import { SimpleForm } from './SimpleForm'
import CreateAccountForm from './CreateAccountForm'
import CreateAccountFormMain from './CreateAccountFormMain'

function App() {
  return (
    <div className="App">
      <p>---------------simple form component--------------</p>
      <SimpleForm />

      <p>---------------create account form component--------------</p>
      <CreateAccountForm />

      <p>---------------create account form part 2 component--------------</p>
      <CreateAccountFormMain />
    </div>
  );
}

export default App;
