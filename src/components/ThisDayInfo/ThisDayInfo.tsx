import React from 'react';
import styles from "./ThisDayInfo.module.scss"
import temp from "../../assets/img/thermometer.svg"

export const ThisDayInfo = () => {
    return (
        <div className={styles.main}>
            <div className={styles.info}>
                <div className={styles.charact}>
                    <img src={temp} alt="temp"/>
                    <div className={styles.title}>Температура</div>
                    <p>20° - ощущается как 17°</p>
                </div>
                <div className={styles.charact}>
                    <img src={temp} alt="temp"/>
                    <div className={styles.title}>Температура</div>
                    <p>20° - ощущается как 17°</p>
                </div>
                <div className={styles.charact}>
                    <img src={temp} alt="temp"/>
                    <div className={styles.title}>Температура</div>
                    <p>20° - ощущается как 17°</p>
                </div>
                <div className={styles.charact}>
                    <img src={temp} alt="temp"/>
                    <div className={styles.title}>Температура</div>
                    <p>20° - ощущается как 17°</p>
                </div>
            </div>
        </div>
    );
};

