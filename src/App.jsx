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
            username: ''
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
        let lowerValid = document.getElementById('char-lower-case');
        let upperValid = document.getElementById('char-upper-case');
        let numberValid = document.getElementById('char-number');
        let lengthValid = document.getElementById('char-count');
        let matchValid = document.getElementById('char-email');

        if (this.checkLowerCase(currInput)) {
            if (!lowerValid.classList.contains('strike')) {
                lowerValid.classList.add('strike');
            }
        } else {
            lowerValid.classList.remove('strike');
        }

        if (this.checkUpperCase(currInput)) {
            if (!upperValid.classList.contains('strike')) {
                upperValid.classList.add('strike');
            }
        } else {
            upperValid.classList.remove('strike');
        }

        if (this.checkNumbers(currInput)) {
            if (!numberValid.classList.contains('strike')) {
                numberValid.classList.add('strike');
            }
        } else {
            numberValid.classList.remove('strike');
        }

        if (this.checkLength(currInput)) {
            if (!lengthValid.classList.contains('strike')) {
                lengthValid.classList.add('strike');
            }
        } else {
            lengthValid.classList.remove('strike');
        }

        if (!this.checkEmailMatch(currInput)) {
            if (!matchValid.classList.contains('strike')) {
                matchValid.classList.add('strike');
            }
        } else {
            matchValid.classList.remove('strike');
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
        let passField = document.getElementById('pass-field');
        let checkBox = document.getElementById('show-radio');
        if (passField.type === 'password' && !checkBox.classList.contains('options-selected')) {
            passField.type = 'text';
            checkBox.classList.add('options-selected');
        } else if (passField.type === 'text' && checkBox.classList.contains('options-selected')) {
            passField.type = 'password';
            checkBox.classList.remove('options-selected');
        }
    }

    render() {
        return (
            <div className={'main'}>
                <div className={'container'}>
                    <Login toggleShow={this.toggleShowPassword} handleChange={this.handleChange}
                           handleSubmit={this.handleSubmit}/>
                </div>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));