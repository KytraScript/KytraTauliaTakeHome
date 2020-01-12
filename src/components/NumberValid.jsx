import React from 'react';

const NumberValid = (props) => {
        return (
            <div className={props.numberValid ? 'requirement strike' : 'requirement'} id={'char-number'}>
                <div className={'bullet'}></div>
                1  Number
            </div>
        )
};

export default NumberValid;