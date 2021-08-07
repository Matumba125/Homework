import React, {useState} from 'react'
import {
    checkByAge,
    homeWorkReducer,
    InitialStateType,
    sortByAlphabet,
    sortByReverseAlphabet,
    UserInfoType
} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import style from './HW8.module.css'


const initialPeople: InitialStateType = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<InitialStateType>(initialPeople) // need to fix any


    // need to fix any
    const finalPeople = people.map((p: UserInfoType) => (
        <div className={style.item} key={p._id}>
            <span>{p.name}  </span>
            <span>{p.age}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortByAlphabet()))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortByReverseAlphabet()))
    const checkAge = () => setPeople(homeWorkReducer(initialPeople, checkByAge(18)))

    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            <div className={style.listWrapper}>
                {finalPeople}
            </div>
            <div className={style.buttonLayer}>
                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={checkAge}>check age</SuperButton>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
