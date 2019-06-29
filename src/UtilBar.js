import React, { Component } from "react";
import AddComments from "./AddComments";
import Comment from "./Comment";

export default class UtilBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
      counter: 0,
      comment: []
    };
  }
  addComment = comment => {
    const ti = new Date();
    const id = Date.parse(ti);
    const record = { id,comment };
    this.setState({
      comment: [comment, ...this.state.comment]
    });
  };
  counter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-lg-2">
          <button className="btn btn-sm btn-info" onClick={this.counter}>
            {this.state.counter} LIKES
          </button>
        </div>

        <AddComments addComment={this.addComment} />
        <Comment comment={this.state.comment}/>
        
      </div>
    );
  }
}
