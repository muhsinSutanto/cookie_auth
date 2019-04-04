import React, { Component } from 'react';
import {loginUser} from '../lib/auth'

class LoginForm extends Component {
    state={
        email:'',
        password:''
    }

    onChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    onSubmit = event => {
        const {email, password} = this.state
        event.preventDefault()
        loginUser(email, password)
    }

    render() { 
        return ( 
            <form onSubmit={this.onSubmit}>
                <div>
                    <input 
                        type='email'
                        name='email'
                        placeholder='email'
                        onChange={this.onChange}
                    />
                </div>
                <div>
                    <input 
                        type='password'
                        name='password'
                        placeholder='password'
                        onChange={this.onChange}
                    />
                </div>
                <button type='submit'> submit </button>

            </form>
         );
    }
}
 
export default LoginForm;