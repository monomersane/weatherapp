import React, {Component} from 'react';

export default class Subcontents extends Component{

    constructor(props){
        super(props);

        this.state = {
            color: "#ffd966"
        }
    }

    render(){
        return(
            <div 
            onMouseOver ={() => this.setState({color:"peachpuff"})}
            onMouseOut={() => this.setState({color:"#ffd966"})}
            className="col-3 mr-5" 
            style={{backgroundColor:this.state.color, height: "300px"}}></div>
        );
    }
}