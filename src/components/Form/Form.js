import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom'
import { Redirect } from 'react-router'
import Trips from '../Trips/Trips';

class Form extends React.Component {

  state = {
    redirect: false
  }

  userNameInput = React.createRef();
  passwordInput = React.createRef();

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.loginValidation(this.userNameInput.current.value, this.passwordInput.current.value);    
    this.userNameInput.current.value = '';
    this.passwordInput.current.value = '';
    //this.renderRedirect();
  };

  async loginValidation(email, password)
  {
    let details = {
      'Email': email,
      'Password': password
    }

    let response = await fetch(`https://localhost:44330/Login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:3000'
      },
      body: JSON.stringify(details)
    });

    let data = await response.json();
    console.log(data)

    if (data === 'Login successful') {
      this.setState({ redirect: true });
      console.log(this.state.redirect)
    }

    return data;
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      //return <Redirect to='../Trips' />
      return(
        <BrowserRouter >
          <Route component={Trips}></Route>
        </BrowserRouter>
      );
    }
  }

  render() { 
    return(
      <form onSubmit={this.onSubmitHandler}>
        <div>
          <input 
            type="text" 
            className="col-lg-6 pull-left" 
            placeholder="Username"
            ref={this.userNameInput} >
          </input>

          <input 
            type="password" 
            className="col-lg-6 pull-right" 
            placeholder="Password"
            ref={this.passwordInput} >
          </input>
          <button className="btn btn-outline-info btn-lg">Log In</button>
          {/* <button 
            className="btn btn-outline-info btn-lg"
            onClick={this.renderRedirect()}
            >Log In
          </button> */}
        </div>
        
      </form>
    );
  }
};

Form.propTypes = {};

Form.defaultProps = {};

export default Form;
