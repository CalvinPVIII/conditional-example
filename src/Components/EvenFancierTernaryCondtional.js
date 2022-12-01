import React from "react";

export default class EvenFancierTernaryConditional extends React.Component {
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
    return (
      <>
        <h3>Number of clicks: {this.state.numberOfClicks}</h3>
        <h2>
          There is an {this.state.numberOfClicks % 2 === 0 ? "even" : "odd"}{" "}
          number of clicks
        </h2>
        <h2 onClick={this.handleClick}>Click Me</h2>
      </>
    );
  }
}
