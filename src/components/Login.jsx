import React from 'react';
import Requirements from "./Requirements.jsx";
import Field from "./Field.jsx"

const Login = (props) => {

    return (
        <div className={'login-view'}>
            <div className={'login-logo'}></div>
            <form onSubmit={props.handleSubmit}>
                <Field toggleShow={props.toggleShow} visiblePass={props.visiblePass} handleChange={props.handleChange}/>
            </form>
            <Requirements lowerValid={props.lowerValid} upperValid={props.upperValid} emailValid={props.emailValid}
                          lengthValid={props.lengthValid} numberValid={props.numberValid}/>
        </div>
    )
};

export default Login;



