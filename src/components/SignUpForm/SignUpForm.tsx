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
  errorMessage: string;
  invalid: boolean;
}

class SignUpForm extends React.Component<SignUpFormProps, SignUpFormState> {
  constructor () {
    super();
    this.state = {
      username: '',
      password: '',
      rePassword: '',
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
  handleRePasswordChange = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    let target = e.target as HTMLInputElement;
    this.setState({rePassword: target.value}, this.validate);
  }
  handleSignUp = (e): void  => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.onSignUp(user);
  }
  validate = (): boolean => {
    if (!Boolean(this.state.username)) {
      this.setState({errorMessage: 'Please enter your username', invalid: true});
      return false;
    } else if (!Boolean(this.state.password)) {
      this.setState({errorMessage: 'Please enter your password', invalid: true});
      return false;
    } else if (!Boolean(this.state.rePassword)) {
      this.setState({errorMessage: 'Please repeat your password', invalid: true});
    } else if (this.state.password !== this.state.rePassword) {
      this.setState({errorMessage: 'Passwords are not the same', invalid: true});
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
        <input
          type="password"
          className="input"
          placeholder="Repeat Password"
          value={this.state.rePassword}
          onChange={this.handleRePasswordChange}
        />
        <div className="btn-wrapper">
          <Button text="Sign Up" destination="/" handleClick={this.handleSignUp} disabled={this.state.invalid}/>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
