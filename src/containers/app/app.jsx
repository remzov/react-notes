import React, { Component } from 'react';
import Notes from '../notes/notes';
import Header from '../../components/header/header';
import Control from '../../components/control/control';

class App extends Component {
  render() {
    return (
      <div>
        <Header title={'Notes app'}/>
        <div className="row w-100">
          <div className="col-2">
            <Control/>
          </div>
          <div className="col-10">
            <Notes/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
