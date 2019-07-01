import React, { Component } from "react";
import UtilBar from "./UtilBar";

class PostsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      
    };
  }
  time = () =>{
    const d= new Date();
    const t= Date.parse(d);
   
    return `${(t-this.props.postitem.id-(t-this.props.postitem.id)%60000)/60000} minutes ${((t-this.props.postitem.id)/1000)%60} seconds ago`
  }
  
  render() {
    return (
      <div className="row shadow p-3 mb-5 bg-white rounded">
        <div className="col-sm-12">
          <h4>{this.props.postitem.title}</h4>
          
          <hr />
        </div>
        <div className="col-sm-2">
          <span className="label label-default label-arrow label-arrow-right pull-right">
            {this.time()}
          </span>
          <button className="btn btn-danger btn-sm" onClick={this.props.deletePost.bind(this,this.props.postitem.id)}>Delete</button> 
        </div>
        <div className="col-sm-10">
          <p>{this.props.postitem.post}</p>
         
          <UtilBar id={this.props.postitem.id} counter={this.props.postitem.counter} comment={this.props.postitem.comment} likes={this.props.likes} post={this.props.post} addComment={this.props.addComment}/>
        </div>
      </div>
    );
  }
}

export default PostsItem;
