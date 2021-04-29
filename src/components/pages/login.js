import React, { Component } from 'react'
import { connect } from 'react-redux';
import { login } from '../../actions';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    };
  }

  onSubmit = () => {
    this.props.login({
        username: this.state.username, 
        password: this.state.password
    });
  };

  handleInputChange = (event) => {
    const { value, id } = event.target;
    this.setState({
      [id]: value
    });
  }

  render() {
    return (
        <div>
            <div>
                <label>
                    Username
                </label>
                <input 
                id="username" 
                type="text" 
                value={this.state.username}
                onChange={this.handleInputChange}
                required
                placeholder="JohnDoe"
                />
            </div>
            <div>
                <label>
                    Password
                </label>
                <input
                id="password" 
                type="password" 
                placeholder="**************"
                value={this.state.password}
                onChange={this.handleInputChange}
                required
                />
                <p>Please choose a password.</p>
            </div>
            <div>
                <button 
                type="button"
                onClick={this.onSubmit}
                >
                    Login
                </button>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="/register">
                    Register?
                </a>
            </div>
        </div>
    )
  }
}

export default connect(
  null,
  { login }
)(Login);