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
            username: '',
            visiblePass: false,
            lowerValid: false,
            upperValid: false,
            numberValid: false,
            lengthValid: false,
            emailValid: true,
        };

        this.extractEmail = this.extractEmail.bind(this);
        this.toggleShowPassword = this.toggleShowPassword.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let self = this;
        axios.get('http://www.mocky.io/v2/5de6c328370000a21d0925f2')
            .then((response) => {
                self.setState({
                    userEmail: this.extractEmail(response.data)
                })
            })
            .then(() => {
                self.setState({
                    username: this.extractUsername(this.state.userEmail)
                })
            })
            .then(() => {
                this.validatePassword(this.state.userInput);
            })
            .catch(error => {
                console.error(error);
            })
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({
            userInput: event.target.value
        }, () => {
            this.validatePassword(this.state.userInput);
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    extractEmail(str) {
        let result = str.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
        return result[0];
    }

    extractUsername(str) {
        let email = this.state.userEmail;
        let signIdx = email.lastIndexOf('@');
        return email.substring(0, signIdx);

    }

    validatePassword(str) {
        let currInput = str;

        if (this.checkLowerCase(currInput)) {
            this.setState({
                lowerValid: true
            })
        } else {
            this.setState({
                lowerValid: false
            })
        }

        if (this.checkUpperCase(currInput)) {
            this.setState({
                upperValid: true
            })
        } else {
            this.setState({
                upperValid: false
            })
        }

        if (this.checkNumbers(currInput)) {
            this.setState({
                numberValid: true
            })
        } else {
            this.setState({
                numberValid: false
            })
        }

        if (this.checkLength(currInput)) {
            this.setState({
                lengthValid: true
            })
        } else {
            this.setState({
                lengthValid: false
            })
        }

        if (!this.checkEmailMatch(currInput)) {
            this.setState({
                emailValid: true
            })
        } else {
            this.setState({
                emailValid: false
            })
        }
    }

    checkLowerCase(str) {
        return (/[a-z]/.test(str));
    }

    checkUpperCase(str) {
        return (/[A-Z]/.test(str));
    }

    checkNumbers(str) {
        return /\d/.test(str);
    }

    checkLength(str) {
        return str.length >= 8 && str.length <= 72;
    }

    checkEmailMatch(str) {
        return str.toLowerCase().includes(this.state.username.toLowerCase());
    }

    toggleShowPassword() {
        if(!this.state.visiblePass){
            this.setState({
                visiblePass: true
            })
        } else if(this.state.visiblePass){
            this.setState({
                visiblePass: false
            })
        }
    }

    render() {
        return (
            <div className={'main'}>
                <div className={'container'}>
                    <Login toggleShow={this.toggleShowPassword} handleChange={this.handleChange}
                           handleSubmit={this.handleSubmit} lowerValid={this.state.lowerValid}
                           upperValid={this.state.upperValid}
                           numberValid={this.state.numberValid} lengthValid={this.state.lengthValid}
                           emailValid={this.state.emailValid}
                           visiblePass={this.state.visiblePass}/>
                </div>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));