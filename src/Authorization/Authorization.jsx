import React, {useState} from 'react';
import { PAGES } from '../App';
import styles from './index.module.css'
const Authorization = ({setPage}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const validateEmail = (email) => {
        return !String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const buttonDisabled = error || !password.length;

    const renderError = () => {
        if (error) {
            return (
                <div className={styles.error}>
                    <div> Неверный email</div>
                </div>
            )
        }
        if (!error) {
            return null;
        }
    }
    return (
        <div className={styles.form}>
            <h1>Sign in</h1>
            <input type ='text'
                   value = {email}
                   onChange={event => {
                       setEmail(event.target.value);
                       setError(validateEmail(event.target.value))
                   }}
                   placeholder='Email'/>
            {renderError()}

            <input type ='password'
                   value = {password}
                   onChange={event => setPassword(event.target.value)}
                   placeholder='Password'/>
            <button
                disabled = {buttonDisabled}
                onClick={() => localStorage.setItem(email, password)}
            >
                Log In
            </button>
            <div className={styles.registration} onClick={() => { setPage(PAGES.registration) }}>
                Registration
            </div>
        </div>
    );
};

export default Authorization;
