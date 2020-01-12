import React from 'react';
import LengthValid from './LengthValid.jsx';
import LowerValid from './LowerValid.jsx';
import EmailValid from './EmailValid.jsx';
import UpperValid from './UpperValid.jsx';
import NumberValid from './NumberValid.jsx';

const Requirements = (props) => {

    return (
        <div className={'login-requirements'}>
            <div className={'requirements-col'}>
                <LengthValid lengthValid={props.lengthValid}/>
                <LowerValid lowerValid={props.lowerValid}/>
                <EmailValid emailValid={props.emailValid}/>
            </div>
            <div className={'requirements-col'}>
                <UpperValid upperValid={props.upperValid}/>
                <NumberValid numberValid={props.numberValid}/>
            </div>
        </div>
    )
};

export default Requirements;