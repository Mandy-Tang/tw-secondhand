import * as React from 'react';
import './LoginForm.css';
import Button from '../Button/Button';

interface LoginFormProps {
  onLogin?: Function;
}
interface LoginFormState {
  username: string;
  password: string;
  errorMessage: string;
  invalid: boolean;
}

class LoginForm extends React.Component<LoginFormProps, LoginFormState> {
  constructor () {
    super();
    this.state = {
      username: '',
      password: '',
      errorMessage: '',
      invalid: false
    };
  }
  handleUsernameChange = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    let target = e.target as HTMLInputElement;
    this.setState({username: target.value}, this.validate);
  }
  handlePasswordChange = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    let target = e.target as HTMLInputElement;
    this.setState({password: target.value}, this.validate);
  }
  handleLogin = (e): void  => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.onLogin(user);
  }
  validate = (): boolean => {
    if (!Boolean(this.state.username)) {
      this.setState({errorMessage: 'Please enter your username', invalid: true});
      return false;
    } else if (!Boolean(this.state.password)) {
      this.setState({errorMessage: 'Please enter your password', invalid: true});
      return false;
    } else {
      this.setState({errorMessage: '', invalid: false});
      return true;
    }
  }

  public render () {
    return (
      <div>
        <p className="error-message">{this.state.errorMessage}</p>
        <input
          type="text"
          className="input"
          placeholder="User name"
          value={this.state.username}
          onChange={this.handleUsernameChange}
        />
        <input
          type="password"
          className="input"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <div className="btn-wrapper">
          <Button text="Login" destination="/" handleClick={this.handleLogin} disabled={this.state.invalid}/>
        </div>
        <div className="btn-wrapper">
          <Button text="Sign-up" destination="/sign-up"/>
        </div>
      </div>
    );
  }
}

export default LoginForm;
