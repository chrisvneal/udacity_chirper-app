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
    return <div>New Tweet</div>;
  }
}

export default NewTweet;
