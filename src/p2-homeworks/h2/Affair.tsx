import React from 'react'
import {AffairType} from "./HW2";
import style from "./Affairs.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id);
    }
    const priorityStyle = {
        color: (props.affair.priority === "high") ? "red" :
            (props.affair.priority === "middle") ? "yellow" :
                (props.affair.priority === "low") ? "green" : ""
    }


    return (
        <div className={style.affair}>
            <span>{props.affair.name}</span>
            <span className={style.priority} style={priorityStyle}>{props.affair.priority}</span>

            <SuperButton onClick={deleteCallback} className={style.button}>X</SuperButton>
        </div>
    )
}

export default Affair
