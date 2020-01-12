import React from 'react';
import Requirements from "./Requirements.jsx";

const Login = (props) => {

    return (
        <div className={'login-view'}>
            <div className={'login-logo'}></div>
            <form onSubmit={props.handleSubmit}>
                <div className={'pass-input'}>
                    <span className={'pass-label'}>Password</span>
                    <input type={"password"} id={"pass-field"} name={"auth"} onChange={props.handleChange}/>
                    <div className={"pass-options"}>
                        <div id={'show-radio'} onClick={props.toggleShow}></div>
                        <span>Show</span>
                    </div>
                </div>
            </form>
            <Requirements/>
        </div>
    )
};

export default Login;

