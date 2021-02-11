import React, { Component } from "react";

class NewTweet extends Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    const text = e.target.useDebugValue(
      this.setState(() => ({
        text,
      }))
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { text } = this.state;

    // todo: Add tweet to store

    console.log("New tweet: ", text);

    this.setState(() => ({
      text: "",
    }));
  };
  render() {
    const { text } = this.state;
    return (
      <div>
        <h3 className="center">Compose new tweet</h3>
        <form className="new-tweet" onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening?"
            value={text}
            onChange={this.handleChange}
            className="textarea"
            maxLength={280}
          />
        </form>
      </div>
    );
  }
}

export default NewTweet;
