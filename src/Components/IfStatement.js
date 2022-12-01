import React from "react";

export default class IfStatment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfClicks: 0,
    };
  }

  handleClick = () => {
    this.setState({ numberOfClicks: this.state.numberOfClicks + 1 });
  };

  render() {
    let currentlyVisibileState;
    if (this.state.numberOfClicks % 2 === 0) {
      currentlyVisibileState = <h1>There is an even number of clicks</h1>;
    } else {
      currentlyVisibileState = <h1>There is an odd number of clicks</h1>;
    }
    return (
      <>
        <h3>Number of clicks: {this.state.numberOfClicks}</h3>
        {currentlyVisibileState}
        <h2 onClick={this.handleClick}>Click Me</h2>
      </>
    );
  }
}
