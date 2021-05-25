import React from 'react'
import styles from "./Message.module.css";

type messageDataPropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: messageDataPropsType) {
    return (
        <div className={styles.message}>
            <div className={styles.avatar}>
                <img src={props.avatar} alt="avatar"/>
            </div>
            <div className={styles.messageContent}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.text}>{props.message}</div>
                <div className={styles.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
