import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    count: 0,
    isShow: true,
  };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  handelShow = () => {
    this.setState({ isShow: !this.state.isShow });
  };
  componentDidMount(){
    console.log("componentDidMount")

  }
  componentDidUpdate(){
    console.log("componentDidUpdate")


  }
  componentWillUnmount(){
    console.log("componentWillUnmount")
  }
  render() {
        // setInterval(this.increment, 1000);

    console.log("render");
    return (
      <div className="App">
        <button onClick={this.handelShow}>{this.state.isShow?"Hide":"Show"}</button>
        {this.state.isShow && (
          <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
          </div>
        ) }
      </div>
    );
  }
}
