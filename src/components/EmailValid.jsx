import React from 'react';

const EmailValid = (props) => {

    if(!props.emailValid) {
        return (
            <div className={'requirement'} id={'char-email'}>
                <div className={'bullet'}></div>
                Should Not Match Your Email Address
            </div>
        )
    } else if (props.emailValid){
        return (
            <div className={'requirement strike'} id={'char-email'}>
                <div className={'bullet'}></div>
                Should Not Match Your Email Address
            </div>
        )
    }
};

export default EmailValid;