import React from 'react';
// import Button from './components/ui/Button/Button';
import FlexW from './components/layout/FlexW/FlexW';
// import { ADR_REST } from './config/config';
import  { ConnectedMemeForm } from './components/ui/MemeForm/MemeForm';
import  {ConnectdedMemeThumbnail } from './components/ui/MemeThumbnail/MemeThumbnail';
import ConnectedMemeViewer from './components/ui/ConnectedMemeViewer/ConnectedMemeViewer';
import NavBar from './components/ui/NavBar/NavBar';

const App = () => {
    return (
      <div className='App'>
          <NavBar/>
          <ConnectdedMemeThumbnail/>
          <FlexW>
              <ConnectedMemeViewer/>
              <ConnectedMemeForm/>
          </FlexW>
          
      </div>
    );
};

export default App;