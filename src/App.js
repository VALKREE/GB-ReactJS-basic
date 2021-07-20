import {Message} from "./components/Message/Message"

import './App.sass';

const myMessage = 'This is a message';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Message name="Какое-то сообщение"/>
        </p>
      </header>
      
    </div>
  );
}

export default App;
