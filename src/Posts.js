import React from "react";
import PostsItem from './PostsItem';

const Posts = (props) => {

    return (
      <div>
        <div class="container">
          <div class="col-md-1" />
          <div class="col-md-11">
            <div class="row">
              <div class="col-sm-12">
                <h1>
                  <i class="glyphicon glyphicon-asterisk" /> posts
                </h1>
                <p class="page-header lead">Blog list example for Bootstrap</p>{" "}
              </div>
            </div>
            {props.post.map((i)=>{
                return <PostsItem postitem={i} post={props.post} deletePost={props.deletePost} likes={props.likes} addComment={props.addComment}/>;
            })}
            
          </div>
        </div>
      </div>
    );
  }


export default Posts;
