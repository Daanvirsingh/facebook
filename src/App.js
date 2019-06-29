import React, { Component } from "react";
import Navbar from "./Navbar";
import AddPost from "./AddPost";
import Posts from "./Posts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: []
    };
  }

  addPost = (title,post) => {
    const d= new Date();
    const id=Date.parse(d);
    const record={id,title, post};
    this.setState({
      input: [record,...this.state.input]
    })
    
  };

  deletePost= (id) =>{
    let temp=this.state.input.filter((post)=>{
      return post.id!==id
    }) 
    this.setState({
      input:temp
  });
    
  }
  render() {
    return (
      <div>
        <Navbar />
        <AddPost addPost={this.addPost}/>
        <Posts post={this.state.input} deletePost={this.deletePost}/>

      </div>
    );
  }
}

export default App;
