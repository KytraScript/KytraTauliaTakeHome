import React from 'react';

const LowerValid = (props) => {

    if(!props.lowerValid) {
        return (
            <div className={'requirement'} id={'char-lower-case'}>
                <div className={'bullet'}></div>
                1  Lowercase Character
            </div>
        )
    } else if (props.lowerValid){
        return (
            <div className={'requirement strike'} id={'char-lower-case'}>
                <div className={'bullet'}></div>
                1  Lowercase Character
            </div>
        )
    }
};

export default LowerValid;