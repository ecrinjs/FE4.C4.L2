import NumberButton from "./NumberButton";

const { Component } = require("react");

class Calculator extends Component {
  construcator(props) {
    super(props);

    this.state = { number1: 0, number2: 0, sign: "", result: 0 };
  }

  componentDidUpdate() {}
  changeHandler = () => {
    return this.state.number;
  };
  numberHandler = (e) => {
    this.state.sign === ""
      ? this.setState({ ...this.state, number1: number(e.target.value) })
      : this.setState({ ...this.state, number2: number(e.target.value) });
  };

  signHandler = (e) => {
    this.setState({ ...this.state, sign: e.target.value });
  };

  getResult = () => {
    switch (this.state.sign) {
      case "+":
        this.setState({
          ...this.state,
          sign: "",
          result: this.state.number1 + this.state.number2,
        });
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <form>
        <input type="text" value={this.changeHandeler} readOnly={true} />
        <NumberButton value={0} numberHandler={this.numberHandler} />
        <NumberButton value={1} numberHandler={this.numberHandler} />
        <NumberButton value={2} numberHandler={this.numberHandler} />
        <NumberButton value={3} numberHandler={this.numberHandler} />
        <NumberButton value={4} numberHandler={this.numberHandler} />
        <NumberButton value={5} numberHandler={this.numberHandler} />
        <NumberButton value={6} numberHandler={this.numberHandler} />
        <NumberButton value={7} numberHandler={this.numberHandler} />
        <NumberButton value={8} numberHandler={this.numberHandler} />
        <NumberButton value={9} numberHandler={this.numberHandler} />
        <input type="button" value={"+"} onClick={this.signHandler} />
        <input type="button" value={"="} onClick={this.getResult} />
      </form>
    );
  }
}

export default Calculator;
