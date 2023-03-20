import React, {useState} from 'react';
import Authorization from "./Authorization/Authorization";
import Registration from "./Registration/Registration";
import About from "./About/About";

import styles from './app.module.css';
const PAGES = {
    login: 'login',
    registration: 'registration',
    about: 'about',
}
const App = () => {
    const [page, setPage] = useState(PAGES.login);
    let content = null;
    if (page === PAGES.login) content = <Authorization setPage={ setPage } />
    if (page === PAGES.about) content = <About setPage={ setPage }/>
    if (page === PAGES.registration) content = <Registration setPage={ setPage } />
    const headerContent = page === PAGES.about ? <div>Авторизация</div> : <div>Об авторе</div>

    return (
        <div className={styles.main}>
        <div className={styles.header} onClick={() => {
            if (page !== PAGES.about) {
                setPage(PAGES.about);
            } else {
                setPage(PAGES.login);
            }
        }}>
            {headerContent}
        </div>
            {content}
        </div>
    )
};

export { App, PAGES };
