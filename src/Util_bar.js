import React, { Component } from 'react'

export default class Util_bar extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
    }

    increment= ()=>{
        this.setState({
            counter:this.state.counter +1
        })
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-lg-1">
                    <button type="button" class="glyphicon glyphicon-thumbs-up" aria-label="Left Align">
                        <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true">LIKE</span>
                    </button>
                </div>
                <div className="col-lg-2">
                    <label>Add Comment</label>
                </div>
                <div className="col-lg-6">
                    <input type="text" placeholder="enter comment"></input>
                </div>
                <div className="col-lg-3">
                    <button className="btn btn-default">View Comments</button>
                </div>
                
            </div>
        )
    }
}
