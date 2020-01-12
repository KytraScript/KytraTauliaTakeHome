import React from 'react';

const NumberValid = (props) => {

    if(!props.numberValid) {
        return (
            <div className={'requirement'} id={'char-number'}>
                <div className={'bullet'}></div>
                1  Number
            </div>
        )
    } else if (props.numberValid){
        return (
            <div className={'requirement strike'} id={'char-number'}>
                <div className={'bullet'}></div>
                1  Number
            </div>
        )
    }
};

export default NumberValid;