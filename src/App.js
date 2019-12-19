import React from 'react';
import { Topbar } from './topbar';
import { Jumbotron } from './jumbotron';
import { CardRow } from './cardrow';

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <div className="container-fluid mx-0 px-0">
        <Jumbotron></Jumbotron>
        <CardRow></CardRow>
      </div>
    </div>
  );
}

export default App;
