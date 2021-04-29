import React, { Component } from 'react'
import { connect } from 'react-redux';
import { register } from '../../actions';

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
        username: '',
        email: '',
        password: '',
    };
  }
  onSubmit = () => {
    this.props.register({
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
                Email
            </label>
            <input
            id="email" 
            type="text" 
            value={this.state.email}
            onChange={this.handleInputChange}
            required
            placeholder="JohnDoe@example.com"
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
                Register
            </button>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="/login">
                Have an account already?
            </a>
        </div>
    </div>
    )
  }
}

export default connect(
  null,
  { register }
)(Register);