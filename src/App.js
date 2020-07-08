import React from 'react';
import './App.css';
import FormCity from './components/FormCity';
import FormName from './components/FormName'

function App() {
  return (
    <div className="App1">
      <header className="App-header">
          <h1>Open Table Restaurant Finder </h1>
            <section id="form">
              <FormCity />
              <p>OR</p>
              <FormName />
              
              
          </section>
      </header>
    </div>
  );
}

export default App;