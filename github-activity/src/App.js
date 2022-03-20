import React, {Component} from 'react';

import axios from 'axios';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      ghActivity: [],
    }
  }

  async componentDidMount() {
    let response = await axios.get('https://api.github.com/users/ramonaspence/events');
    console.log(response);
  }

  render() {
    return(
      <h1>
        Hello, World!
      </h1>
    )
  }
}

export default App;
