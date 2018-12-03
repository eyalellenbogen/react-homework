import React, { Component } from "react";
export class LoginPage extends Component {

    formRef = new React.createRef();
    userRef = new React.createRef();
    passRef = new React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: '',
            submitted: false
        };
    }
    render() {
        return (
            <div className="login-page">
                <h1>Login</h1>
                <form noValidate onSubmit={(e) => this.login(e)} ref={this.formRef} className={this.state.submitted ? 'was-validated' : ''}>
                    <div className={'form-group ' + (!this.userRef.current || this.userRef.current.validity.valid ? '' : 'invalid')}>
                        <label>User</label>
                        <input name='user' onChange={this.handleUserChange.bind(this)} ref={this.userRef} required type="text" value={this.state.username} className="form-control" />
                    </div>
                    <div className={'form-group ' + (!this.passRef.current || this.passRef.current.validity.valid ? '' : 'invalid')}>
                        <label>Password</label>
                        <input name='password' onChange={this.handlePasswordChange.bind(this)} ref={this.passRef} required type="password" value={this.state.password} className="form-control" />
                    </div>
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        )
    }

    login(event) {
        event.preventDefault();
        this.setState({ submitted: true });
        if (!this.formRef.current.checkValidity()) {
            return;
        }
        // super secured login process goes here
        this.props.onLogin(true);
        this.props.history.replace('/cart');
    }

    handleUserChange(event) {
        this.setState({ user: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }
}