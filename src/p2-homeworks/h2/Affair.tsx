import React from 'react'
import {AffairType} from "./HW2";
import style from "./Affairs.module.css"

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id);
    }
    const priorityStyle = {
        color:  (props.affair.priority === "high") ? "red" :
                (props.affair.priority === "middle") ? "yellow" :
                (props.affair.priority === "low") ? "orange" : "black"
    }


    return (
        <div className={style.affair}>
            <div>{props.affair.name}</div>
            <div className={style.priority} style={priorityStyle}>{props.affair.priority}</div>

            <button onClick={deleteCallback} className={style.button}>X</button>
        </div>
    )
}

export default Affair
