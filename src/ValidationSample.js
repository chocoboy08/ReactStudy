import React, { Component } from 'react';
import './ValidationSample.css';
export default class ValidationSample extends Component {
    state = {
        password : '',
        clicked : false,
        validated : false
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleClick = () =>{
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        })
        this.input.focus();
    }

    handleKeyPress = (e) =>{
        if(e.key === 'Enter'){
            this.handleClick();
            this.setState({
                [e.target.name]: ''
            })
        }
    }

  render() {
    return (
      <div>
          <input
          ref={(ref) =>this.input=ref}
          type="password"
          value={this.state.password}
          name="password"
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}/>
          <button onClick={this.handleClick}>검증하기</button>
      </div>
    )
  }
}
