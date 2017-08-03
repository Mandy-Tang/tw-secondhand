import * as React from 'react';
import './SignUpForm.css';
import Button from '../Button/Button';

interface SignUpFormProps {
  onSignUp?: Function;
}
interface SignUpFormState {
  username: string;
  password: string;
  rePassword: string;
}

class SignUpForm extends React.Component<SignUpFormProps, SignUpFormState> {
  constructor () {
    super();
    this.state = {
      username: '',
      password: '',
      rePassword: ''
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
  handleRePasswordChange = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    let target = e.target as HTMLInputElement;
    this.setState({rePassword: target.value});
  }
  handleSignUp = (): void  => {
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.onSignUp(user);
  }
  validate = (): boolean => {
    return !Boolean(this.state.username && this.state.password && this.state.rePassword);
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
        <input
          type="password"
          className="input"
          placeholder="Repeat Password"
          value={this.state.rePassword}
          onChange={this.handleRePasswordChange}
        />
        <div className="btn-wrapper"><Button text="Sign-up" destination="/" disabled={this.validate()}/></div>
        <div className="btn-wrapper"><button onClick={this.handleSignUp}>Sign-up</button></div>
      </div>
    );
  }
}

export default SignUpForm;
