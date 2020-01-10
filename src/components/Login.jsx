import React from 'react';

const Login = (props) => {

    return (
        <div className={'login-view'}>
            <span className={'pass-label'}>Password:</span>
            <div className={'pass-input'}>
                <form onSubmit={props.handleSubmit}>
                    <input type={"password"} name={"auth"} onChange={props.handleChange}/>
                </form>
            </div>
        </div>
    )

};

export default Login;