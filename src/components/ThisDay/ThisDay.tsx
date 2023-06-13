import React from 'react';
import styles from "./ThisDay.module.scss"
import sun from "../../assets/img/sun.svg"
export const ThisDay = () => {
    return (
        <div className={styles.main}>
            <div className={styles.topBlock}>
                <div className={styles.todayTemp}>
                    <div className={styles.temp}>20°</div>
                    <div className={styles.day}>Сегодня</div>
                </div>
                <img height={120} width={120} src={sun} alt="sun"/>
            </div>
            <div className={styles.bottomBlock}>
                <div className={styles.time}>Время: 21:54</div>
                <div className={styles.country}>Город: Санкт-Петербург</div>
            </div>
        </div>
    );
};

