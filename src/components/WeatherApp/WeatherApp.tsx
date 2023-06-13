import React from 'react';
import {Container} from "../Container/Container";
import {Header} from "../Header/Header";
import {ThisDay} from "../ThisDay/ThisDay";
import {ThisDayInfo} from "../ThisDayInfo/ThisDayInfo";
import styles from "./WeatherApp.module.scss"
import {SomeDayInfo} from "../SomeDayInfo/SomeDayInfo";
export const WeatherApp = () => {
    return (
        <Container>
            <Header/>
            <div className={styles.infoDay}>
                <ThisDay/>
                <ThisDayInfo/>
            </div>
            <SomeDayInfo/>
        </Container>
    );
};

