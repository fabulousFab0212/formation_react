import React from 'react';
// import Button from './components/ui/Button/Button';
import FlexW from './components/layout/FlexW/FlexW';
// import { ADR_REST } from './config/config';
import  { ConnectedMemeForm } from './components/ui/MemeForm/MemeForm';
import  {ConnectdedMemeThumbnail } from './components/ui/MemeThumbnail/MemeThumbnail';
import ConnectedMemeViewer from './components/ui/ConnectedMemeViewer/ConnectedMemeViewer';
import NavBar from './components/ui/NavBar/NavBar';
import {Route, Routes, useParams} from 'react-router-dom'
import {useEffect} from 'react';
import { ACTIONS_CURRENT, store } from './store/store';


const App = () => {
    return (
      <div className='App'>
          <NavBar/>
          <Routes>
            <Route path="/" element={<div>Hello a tous</div>}/>
            <Route path="/editor" element={<MemeEditor/>}/>
            <Route path="/editor/:id" element={<MemeEditor/>}/>
            <Route path="/thumbnail" element={<ConnectdedMemeThumbnail/>}/>
          </Routes>
      </div>
    );
};

function MemeEditor(){
  /*const id = useParams().id;
  useEffect(() => {
    store.dispatch({type:ACTIONS_CURRENT.UPDATE_MEME, value:store.getState().ressources.memes})
  })*/
  console.log(useParams());
  return (
    <FlexW>
      <ConnectedMemeViewer/>
      <ConnectedMemeForm/>
  </FlexW>
  );
}

export default App;