import React from 'react';
import Button from './components/ui/Button/Button';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={counter:1, title:'Mon Titre'}
  }

  componentDidUpdate(oldProps,oldState){
    console.log("component update : ", oldState, this.state)
  }

  render() {
    return (
      <div className='App'>
          Valeur du counter : {this.state.counter}
          <hr/>
          
          <Button
            bgColor="blue"
            onButtonClicked={
              ()=>{
                this.setState({counter:this.state.counter+1});
              }
            }
          >
            Ajouter 1
          </Button>
          <hr/>

          <Button
            onButtonClicked={
              ()=>{
                this.setState({counter:this.state.counter-1});
              }
            }
          >
            Enlever 1
          </Button>
      </div>
    );
  }
}

export default App;