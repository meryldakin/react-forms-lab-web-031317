import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
    this.handleChangeUser = this.handleChangeUser.bind(this)
    this.handleChangePass = this.handleChangePass.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeUser(e){
    this.setState({username: e.target.value})
  }
  handleChangePass(e){
    this.setState({password: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    if(this.state.username.length > 0 && this.state.password.length > 0){
      this.props.onSubmit()
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleChangeUser}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handleChangePass}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}
