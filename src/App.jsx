import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login.jsx";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInput: ''
        };
    }

    handleChange(event){
        event.preventDefault();
        this.setState({
            userInput: event.target.value
        });
        console.log(this.state.userInput);
    }

    handleSubmit(event){
        event.preventDefault();
    }

    render() {
        return (
            <div className={'container'}>
                <Login handleChange={this.handleChange.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));