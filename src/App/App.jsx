import React from 'react';
import './App.css';
import Button from './components/ui/Button/Button'



function App() {

  return (

    <div className="App">
      <Button text="mon texte de button"></Button>
      <Button>texte children</Button>
      <Button>
        <div>texte children node</div>
      </Button>
      <Button>
        <div>texte children node1</div>
        <div>texte children node2</div>
      </Button>
    </div>

  );

}



export default App;