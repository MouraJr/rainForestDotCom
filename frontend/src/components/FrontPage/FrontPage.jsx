import React, { Component } from 'react';

export default class FrontPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            //password: '',
        }
    }

    // updateUsernameValue(e) {
    //     this.setState({
    //         username: e.currentTarget.value,
    //     });
    // }

    onClick = () => {
        this.props.handleLogin(this.state.username)
    }

    render() {
        return (
            <div className="d-flex align-items-center justify-content-center h-100 w-100">
                <div className="card card-primary p-4">
                    <div id={'log-in-credentials'} className="row">
                        <p>Testing deployment!!!!</p>
                        <input className="my-1" id={'username'} value={this.state.username} onChange={e => this.setState({ username: e.currentTarget.value })} name={'username'} placeholder={'Username'} />
                        {/* <input className="my-1" id={'password'} value={this.state.password} onChange={event => this.updatePasswordValue(event)} name={'password'} placeholder={'Password'} /> */}
                        <button className="my-1 btn btn-success" id={'sign-in'} onClick={this.onClick}>Sign In</button>
                    </div>
                </div>
            </div>
        )
    }
}