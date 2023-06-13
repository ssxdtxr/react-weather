import React from 'react';
import styles from "./SomeDayInfo.module.scss"
import sun from "../../assets/img/sun.svg"

export const SomeDayInfo = () => {
    // const router = useRouter()
    return (
        <div className={styles.main}>
            <div className={styles.panel}>
                <div className={styles.mainPanel}>
                    <button>На неделю</button>
                    <button>На месяц</button>
                    <button>На 10 дней</button>
                </div>
                <button>Отменить</button>
            </div>
            <div className={styles.info}>
                {
                    [...new Array(7)].map((_, i) => (
                        <div className={styles.card} key={i}>
                            <div className={styles.topBlock}>
                                <div className={styles.time}>Сегодня</div>
                                <div className={styles.data}>28 авг</div>
                            </div>

                            <img width={48} height={48} src={sun} alt="sun"/>
                            <div className={styles.bottomBlock}>
                                <div className={styles.day}>+18°</div>
                                <div className={styles.data}>+15°</div>
                                <div className={styles.weather}>Облачно</div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

