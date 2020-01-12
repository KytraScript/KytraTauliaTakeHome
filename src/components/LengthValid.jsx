import React from 'react';

const LengthValid = (props) => {

    if(!props.lengthValid) {
        return (
            <div className={'requirement'} id={'char-count'}>
                <div className={'bullet'}></div>
                8-72 Characters
            </div>
        )
    } else if (props.lengthValid){
        return (
            <div className={'requirement strike'} id={'char-count'}>
                <div className={'bullet'}></div>
                8-72 Characters
            </div>
        )
    }
};

export default LengthValid;
