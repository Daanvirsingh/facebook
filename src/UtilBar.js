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
  
  counter = () => {
    this.props.likes(this.props.id)
    };

  render() {
    return (
      <div className="row">
        <div className="col-lg-2">
          <button className="btn btn-sm btn-info" onClick={this.counter}>
            {this.props.counter} LIKES
          </button>
        </div>

        <AddComments addComment={this.props.addComment} id={this.props.id} />
        <Comment comment={this.props.comment} id={this.props.id}/>
      </div>
    );
  }
}
