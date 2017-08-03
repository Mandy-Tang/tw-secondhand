import * as React from 'react';
import './LoginForm.css';
import Button from '../Button/Button';

interface LoginFormProps {
  onLogin?: Function;
}
interface LoginFormState {
  username: string;
  password: string;
  disabled?: boolean;
}

class LoginForm extends React.Component<LoginFormProps, LoginFormState> {
  constructor () {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }
  handleUsernameChange = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    let target = e.target as HTMLInputElement;
    this.setState({username: target.value});
  }
  handlePasswordChange = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    let target = e.target as HTMLInputElement;
    this.setState({password: target.value});
  }
  handleLogin = (): void  => {
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.onLogin(user);
  }
  validate = (): boolean => {
    return !Boolean(this.state.username && this.state.password) ;
  }

  public render () {
    return (
      <div>
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
        <div className="btn-wrapper"><Button text="Login" destination="/" disabled={this.validate()}/></div>
        <div className="btn-wrapper"><button onClick={this.handleLogin}>Login</button></div>
        <div className="btn-wrapper"><Button text="Sign-up" destination="/sign-up"/></div>
      </div>
    );
  }
}

export default LoginForm;
