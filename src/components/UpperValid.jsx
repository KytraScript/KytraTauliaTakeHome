import React from 'react';

const UpperValid = (props) => {
        return (
            <div className={props.upperValid ? 'requirement strike' : 'requirement'} id={'char-upper-case'}>
                <div className={'bullet'}></div>
                1  Uppercase Character
            </div>
        )
};

export default UpperValid;