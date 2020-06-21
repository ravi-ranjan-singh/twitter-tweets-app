import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Main from './main/main';
import TweetsPage from './tweets-page/tweetPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/tweets" component={TweetsPage} />
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
