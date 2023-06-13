import React from 'react';
import styles from "./Header.module.scss"
import {GlobalSvgSelector} from "../../assets/icons/GlobalSvgSelector";
import Select from 'react-select'


const colorStyles = {
    control: (styles: any) => ({
        ...styles,
        backgroundColor: '#4F4F4F',
        width: '194px',
        height: '37px',
        border: 'none',
        borderRadius: '10px',
        zIndex: 100,
    })
}

const options = [
    {value: 'Moscow', label: 'Moscow'},
    {value: 'Voronezh', label: 'Voronezh'},
    {value: 'EKB', label: 'EKB'}
]
export const Header = () => {
    return (
        <div className={styles.header}>
            <section className={styles.main}>
                <GlobalSvgSelector id={'header-logo'}/>
                <div className={styles.title}>Weather App</div>
            </section>
            <section className={styles.func}>
                <GlobalSvgSelector id={'change-theme'}/>
                <Select defaultValue={options[0]} styles={colorStyles} options={options}/>
            </section>
        </div>
    );
};

