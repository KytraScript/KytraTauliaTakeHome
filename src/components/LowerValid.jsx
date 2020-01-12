import React from 'react';

const LowerValid = (props) => {
        return (
            <div className={props.lowerValid ? 'requirement strike' : 'requirement'} id={'char-lower-case'}>
                <div className={'bullet'}></div>
                1  Lowercase Character
            </div>
        )
};

export default LowerValid;