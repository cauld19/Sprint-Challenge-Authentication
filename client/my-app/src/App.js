import React from 'react';

import { Route, Switch } from 'react-router-dom';

import {Authorization} from "./Authorization";

import Jokes from "./Jokes"




function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Authorization}/>

        <Route exact path='/jokes' component={Jokes} />

      </Switch>
     

    </div>
  );
}

export default App;
