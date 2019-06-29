import React, { Component } from "react";
import Util_bar from './Util_bar';

class PostsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  
  time= ()=>{
    const d = new Date();
    const t=Date.parse(d);
    return `${((t-this.props.postitem.id-(t-this.props.postitem.id)%60000))/6000} minutes ago`;
  }

  render() {
    return (
      <div class="row">
        <div class="col-sm-12">
          <h4>{this.props.postitem.title}</h4>
          <button className="btn btn-danger" onClick={this.props.deletePost.bind(this,this.props.postitem.id)}>Delete</button> 
          <hr />
        </div>
        <div class="col-sm-2">
          <span class="label label-default label-arrow label-arrow-right pull-right">
            {this.time()}
          </span>
        </div>
        <div class="col-sm-10">
          <p>{this.props.postitem.post}</p>
          <div class="pull-right">
            <span class="label label-warning">web-development</span>{" "}
            <span class="label label-warning">bootstrap</span>{" "}
            <span class="label label-warning">responsive</span>
          </div>
          <p>
            <Util_bar />
          </p>
        </div>
      </div>
    );
  }
}

export default PostsItem;
