import React from 'react'
import styles from "../../styles/Product.module.css"

export default function Card(props) {
    // let CardName = `color_bg ${props.alt}`
    let { name, content, bg_img } = props
    return (

        <div className={styles.card}>
            <div className={styles.wrapper}>
                {/* <div className={CardName}></div> */}
                <div className={styles.card_img} >
                    <img src = {bg_img} />
                </div>
                <div className={styles.cardInfo}>
                    <h1>{name}</h1>
                    <p className={styles.card_content}>{content}</p>
                </div>
            </div>
        </div>
    )
}