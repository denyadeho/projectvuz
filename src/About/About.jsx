import React from 'react';

import img from '../ya.jpg';
import styles from './index.module.css'
const About = () => (
        <div className={styles.main}>
            <div className={styles.content}>
                <div className={styles.photo}>
                    <img src={img}/>
                </div>
                <div className={styles.about}>
                    <div className={styles.header}>
                        Денис, 22 года
                    </div>
                    <div className={styles.text}>
                        Прохожу курсы на обучающей платформе Hexlet с октября 2022 года. Уже изучил JavaScript, HTML, CSS, сейчас учу React. Так же являюсь студентом Пензенского государственного технологического университета, учусь на 1 курсе магистратуры, по специальности - программный инженер.
                    </div>
                </div>
            </div>
        </div>
    )

export default About;
