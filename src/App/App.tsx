import React from 'react';
import Button from './components/ui/Button/Button';
import FlexW from './components/layout/FlexW/FlexW';
import { ADR_REST } from './config/config';
import {MemeSVGThumbnail, MemeSVGViewer} from "orsys-tjs-meme"
import MemeForm from './components/ui/MemeForm/MemeForm';
import {IImage, IMeme} from "orsys-tjs-meme/dist/interfaces/common"
import { DummyMeme} from './interfaces/common';
import MemeThumbnail from './components/ui/MemeThumbnail/MemeThumbnail';

interface IppAppState{
  memes:Array<IMeme>,
  images:Array<IImage>,
  current:IMeme
}

interface IAppProps{

}

class App extends React.Component<IAppProps,IppAppState> {
  constructor(props){
    super(props)
    this.state={memes:[], images:[], current:DummyMeme}
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
          {/* <Button>test </Button>
          <hr/>
          {JSON.stringify(this.state)}
          <hr/> */}
          <MemeThumbnail
            memes={this.state.memes}
            images={this.state.images}
          />
          <FlexW>
              <MemeSVGViewer
                meme={this.state.current}
                image={this.state.images.find(e=>e.id===this.state.current.imageId)}></MemeSVGViewer>
              <MemeForm
                images={this.state.images}
                meme={this.state.current}
                onFormChange={(objt:object) => {
                    this.setState({current:{...this.state.current,...objt}})
                }}
              />
          </FlexW>
          
      </div>
    );
  }
}

export default App;