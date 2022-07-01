import React, { Component } from 'react';
import "./App.css";

import Project from './component/project';
import Task from './component/task';
import Team from './component/team';
import Header from './component/header';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <hr></hr>
        <Project />
        <hr></hr>
        <Task/>
        <hr></hr>
        <Team/>
      </div>
    );
  }
}
 
export default App;
