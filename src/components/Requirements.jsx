import React from 'react';

const Requirements = () => {

    return (
        <div className={'login-requirements'}>
            <div className={'requirements-col'}>
                <div className={'requirement'} id={'char-count'}>
                    <div className={'bullet'}></div>
                    8-72 Characters
                </div>
                <div className={'requirement'} id={'char-lower-case'}>
                    <div className={'bullet'}></div>
                    1 Lowercase Character
                </div>
                <div className={'requirement strike'} id={'char-email'}>
                    <div className={'bullet'}></div>
                    Should Not Match Your Email Address
                </div>
            </div>
            <div className={'requirements-col'}>
                <div className={'requirement'} id={'char-upper-case'}>
                    <div className={'bullet'}></div>
                    1 Uppercase Character
                </div>
                <div className={'requirement'} id={'char-number'}>
                    <div className={'bullet'}></div>
                    1 Number
                </div>
            </div>
        </div>
    )
};

export default Requirements;