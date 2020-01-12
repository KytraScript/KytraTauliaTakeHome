import React from 'react';

const Field = (props) => {

    if (!props.visiblePass) {
        return (
            <div className={'pass-input'}>
                <span className={'pass-label'}>Password</span>
                <input type={"password"} id={"pass-field"} name={"auth"} onChange={props.handleChange}/>
                <div className={"pass-options"}>
                    <div id={'show-radio'} onClick={props.toggleShow}></div>
                    <span>Show</span>
                </div>
            </div>
        )
    } else if (props.visiblePass) {
        return (
            <div className={'pass-input'}>
                <span className={'pass-label'}>Password</span>
                <input type={"text"} id={"pass-field"} name={"auth"} onChange={props.handleChange}/>
                <div className={"pass-options"}>
                    <div className={'options-selected'} id={'show-radio'} onClick={props.toggleShow}></div>
                    <span>Show</span>
                </div>
            </div>
        )
    }
};

export default Field;
