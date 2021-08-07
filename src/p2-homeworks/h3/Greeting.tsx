import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, onEnter, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : s.input

    return (
        <div className={s.container}>
            <SuperInputText
                value={name}
                onChange={setNameCallback}
                className={inputClass}
                onKeyDown={onEnter}
                onBlur={setNameCallback}
                error={error}
            />
            <SuperButton onClick={addUser} disabled={!name}>add</SuperButton>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
