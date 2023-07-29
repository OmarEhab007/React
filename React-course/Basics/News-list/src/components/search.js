import { Component } from "react";

export default class Search extends Component{
    constructor(){
        super()
        // console.log(hamada)
        this.state = {
            keywords:''
        }
    }


    textChanged = (e)=>{
        this.setState({keywords:e.target.value})
        this.props.onKeywordsChange(e.target.value)
    }
    render(){
        console.log(this.props)
        return (
            <div className="search-comp">
                <input type="text" placeholder="enter keyword" 
                value={this.state.keywords}
                onChange={this.textChanged}
                />
                <p>
                    keywords:{this.state.keywords}
                </p>
            </div>
        )
    }
}