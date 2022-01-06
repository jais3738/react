import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    // state
    this.state = {
      users: [],
    };
  }

  componentWillUnmount() {
    axios('https://api.randomuser.me/?nat=US&results=5').then(response => console.log(response));
  }

  render() {
    return (
      <div className="App">Hello, This is Jai and i will back again!
      </div>
    );
  }
}

export default App;
