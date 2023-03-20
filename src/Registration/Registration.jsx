import React, {useState} from 'react';
import styles from './registration.module.css'
import {PAGES} from "../App";
const Registration = ({setPage}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [errorMail, setErrorMail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);

    const validateEmail = (email) => {
        return !String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const buttonDisabled = errorMail || !errorPassword;
    console.log('buttonDisabled', buttonDisabled);
    console.log('errorMail', errorMail);
    console.log('errorPassword', errorPassword);

    const renderErrorEmail = () => {
        if (errorMail) {
            return (
                <div className={styles.error}>
                    <div> Неверный email</div>
                </div>
            )
        }
        if (!errorMail) {
            return null;
        }
    }
    const renderErrorPassword = () => {
        if (!errorPassword) {
            return (
                <div className={styles.error}>
                    <div> Пароли не совпадают </div>
                </div>
            )
        }
        if (errorPassword) {
            return null;
        }
    }
    const isCorrectPassword = (password1, password2) => {
        console.log('password1', password1);
        console.log('password2', password2);
        return password1 === password2;
    }
    return (
        <div className={styles.form}>
            <h1> Registration </h1>
            <input type = 'text'
                   placeholder= 'Email'
                   value = {email}
                   onChange={event => {
                       setEmail(event.target.value)
                       setErrorMail(validateEmail(event.target.value));
                   }}
            />
            {renderErrorEmail()}
            <input type = 'password'
                   placeholder='Password'
                   value = {password}
                   onChange={event => setPassword(event.target.value)}
            />
            <input type = 'password'
                   placeholder='Repeat password'
                   value = {repeatPassword}
                   onChange={event => {
                       setRepeatPassword(event.target.value)
                       setErrorPassword(isCorrectPassword(password, event.target.value))
                       console.log('isCorrect', isCorrectPassword(password, event.target.value))
                   }}
            />
            {renderErrorPassword()}
            <button disabled = {buttonDisabled} onClick={() => localStorage.setItem(email, password)}> Sign Up </button>
            <div className={styles.registration} onClick={() => { setPage(PAGES.login) }}>
                Log In
            </div>
        </div>

    )
};

export default Registration;
