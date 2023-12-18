import {Link} from 'react-router-dom';
import React, { Component } from "react";


class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state= {
        selectedAnswers: [],
    };
}

handleAnswerChange = (event) => {
    const { value, checked } = event.target;
    let { selectedAnswers } = this.state;

    if (checked && !selectedAnswers.includes(value)) {
      selectedAnswers.push(value);
    } else {
      selectedAnswers = selectedAnswers.filter((answer) => answer !== value);
    }

    this.setState({ selectedAnswers });
  };

  handleSubmit = () => {
    // Use this.state.selectedAnswers to send or process the answers
    console.log("Selected answers:", this.state.selectedAnswers);
  };

  render() {
    return (
      <div>
        <h1>Quiz Time!</h1>
        <form>
          <label>
            <input
              type="checkbox"
              value="Option 1"
              onChange={this.handleAnswerChange}
            />
            Option 1
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="Option 2"
              onChange={this.handleAnswerChange}
            />
            Option 2
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="Option 3"
              onChange={this.handleAnswerChange}
            />
            Option 3
          </label>
          <br />
          <button type="button" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Quiz;
