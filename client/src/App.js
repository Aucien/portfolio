// import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
// import './App.css';

// import Home from './components/Home';
// import Project from './components/Project';

// import axios from 'axios';

// class App extends Component {
//   state = { home: true, project: false };

//   setHome = () => this.setState({ home: true, project: false });
//   setProject = () => this.setState({ home: false, project: true });

//   render() {
//     return (
//       <React.Fragment>
//         <div>
//           <button onClick={this.setHome}> Home</button>
//           <button onClick={this.setProject}> Project</button>
//           {this.state.home && <Home />}
//           {this.state.project && <Project />}
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default App;

import React, { useState } from 'react';
import AppBar from './components/AppBar';

function App() {
  return (
    <React.Fragment>
      <AppBar path={'/'} />
    </React.Fragment>
  );
}

export default App;
