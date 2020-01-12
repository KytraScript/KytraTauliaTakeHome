import React from 'react';

const UpperValid = (props) => {

    if(!props.upperValid) {
        return (
            <div className={'requirement'} id={'char-upper-case'}>
                <div className={'bullet'}></div>
                1  Uppercase Character
            </div>
        )
    } else if (props.upperValid){
        return (
            <div className={'requirement strike'} id={'char-upper-case'}>
                <div className={'bullet'}></div>
                1  Uppercase Character
            </div>
        )
    }
};

export default UpperValid;