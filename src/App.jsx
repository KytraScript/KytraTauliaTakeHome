import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login.jsx";
import axios from 'axios';


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInput: '',
            userEmail: '',
        };

        this.extractEmail = this.extractEmail.bind(this);
    }

    extractEmail(str){
        let result = str.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
        return result[0];
    }

    componentDidMount(){
        let self = this;
        axios.get('http://www.mocky.io/v2/5de6c328370000a21d0925f2')
            .then((response) => {
                self.setState({
                    userEmail: this.extractEmail(response.data)
                })
            })
            .then( () => {
                console.log(this.state.userEmail);
            })
            .catch( error => {
                console.error(error);
            })
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
            <div className={'main'}>
                <div className={'container'}>
                <Login handleChange={this.handleChange.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/>
            </div>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));