import React, { Component } from 'react';


     

class BodyContent03 extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }
    

    handleClick(){

        alert('Hi, i am a button :D')

    }

    render(){
        return(
        <div> 
            <div className='bodyContent'>
                
                <div className='buttonDiv'>
                <h1>The Basic Example</h1>
                <button className='button01'  
                type="button" onClick={this.handleClick}>Button 01</button>
                <br/>
                <button className='button02'
                type="button" onClick={this.handleClick}>Button Two </button>
                <br/>
                <button className='button03'  
                type="button" onClick={this.handleClick}>Button 03</button>
                </div>
                
            </div>
        </div>
    )}
}

export default BodyContent03;