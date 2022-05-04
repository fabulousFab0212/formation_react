import React from 'react';
import Button from './components/ui/Button/Button';
import FlexW from './components/layout/FlexW/FlexW';
import { ADR_REST } from './config/config';
import {MemeSVGViewer} from "orsys-tjs-meme"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={memes:[], images:[]}
  }

  componentDidMount(){
    const memes = fetch(ADR_REST+'/memes').then(flux=>flux.json())
    const images = fetch(ADR_REST+'/images').then(flux=>flux.json())
    Promise.all([memes,images]).then(arr=>this.setState({memes:arr[0],images:arr[1]}))
  }


  componentDidUpdate(oldProps,oldState){
    console.log("component update : ", oldState, this.state)
  }

  render() {
    return (
      <div className='App'>
          <Button>test </Button>
          <hr/>
          {JSON.stringify(this.state)}
          <hr/>
          <FlexW>
            {this.state.memes.length && 
              <MemeSVGViewer
                meme={this.state.memes[0]}
                image={this.state.images.find(e=>e.id===this.state.memes[0].imageId)}>
              </MemeSVGViewer>}
          </FlexW>
          
      </div>
    );
  }
}

export default App;