import React from 'react';

const LengthValid = (props) => {
        return (
            <div className={props.lengthValid ? 'requirement strike' : 'requirement'} id={'char-count'}>
                <div className={'bullet'}></div>
                8-72 Characters
            </div>
        )
};

export default LengthValid;
