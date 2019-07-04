import React, { Component } from "react";
import Navbar from "./Navbar";
import AddPost from "./AddPost";
import Posts from "./Posts";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: [],
      pointer:0
    };
  }

  handleScroll = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    
    if (windowBottom >= docHeight) {
      axios.get(`http://localhost:3000/posts`).then(res=>{
        const persons=res.data;
        this.setState({
          input:[...this.state.input,...persons] });
      })
       
    }
  };

  componentDidMount() {

    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  addPost = (title, post) => {
    const ti = new Date();
    const id = Date.parse(ti);

    const record = { id, title, post, counter: 0, comment: [] };
    this.setState({
      input: [record, ...this.state.input]
    });
    console.log(this.state.input);
  };

  likes = id => {
    let yo = this.state.input.map(i => {
      return i;
    });
    for (let i = 0; i < this.state.input.length; i++) {
      if (this.state.input[i].id === id) {
        yo[i].counter++;
      }
    }
    console.log(yo);
    this.setState({
      input: yo
    });
  };

  addComment = (comment, id) => {
    let yo = this.state.input.map(i => {
      return i;
    });
    for (let i = 0; i < this.state.input.length; i++) {
      if (this.state.input[i].id === id) {
        yo[i].comment = [comment, ...yo[i].comment];
      }
    }

    this.setState({
      input: yo
    });
  };

  deletePost = id => {
    let temp = this.state.input.filter(post => {
      return post.id !== id;
    });
    this.setState({
      input: temp
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <AddPost addPost={this.addPost} />
        <Posts
          post={this.state.input}
          deletePost={this.deletePost}
          likes={this.likes}
          addComment={this.addComment}
        />
      </div>
    );
  }
}

export default App;
