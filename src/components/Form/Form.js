import React from 'react';
import PropTypes from 'prop-types';


// const Form = () => (
//   <form>
//     <div>
//       <input type="text" className="col-lg-6 pull-left" placeholder="Username"></input>
//       <input type="password" className="col-lg-6 pull-right" placeholder="Password"></input>
//       <button className="btn btn-outline-info btn-lg">Submit</button>
//     </div>
//   </form>
// );

class Form extends React.Component {
  state = {

  }
  userNameInput = React.createRef();
  passwordInput = React.createRef();

  onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(this.userNameInput.current.value, ", ", this.passwordInput.current.value)
    this.loginValidation(this.userNameInput.current.value, this.passwordInput.current.value)
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

    return data;
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
        </div>
      </form>
    );
  }
};

Form.propTypes = {};

Form.defaultProps = {};

export default Form;
