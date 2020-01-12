import React from 'react';

const EmailValid = (props) => {
        return (
            <div className={props.emailValid ? 'requirement strike' : 'requirement'} id={'char-email'}>
                <div className={'bullet'}></div>
                Should Not Match Your Email Address
            </div>
        )
};

export default EmailValid;