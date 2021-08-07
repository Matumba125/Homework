export type ActionType = ReturnType<typeof sortByAlphabet> |
    ReturnType<typeof sortByReverseAlphabet> |
    ReturnType<typeof checkByAge>

export type UserInfoType = {
    _id: number
    name: string
    age: number
}

export type InitialStateType = Array<UserInfoType>


export const homeWorkReducer = (state: InitialStateType, action: ActionType): InitialStateType => { // need to fix any
    switch (action.type) {
        case 'sort': {
            switch (action.payload) {
                case 'up': {
                    const copyState = [...state]
                    return copyState.sort((a, b) => a.name.toUpperCase() <= b.name.toUpperCase() ? -1 : 1)
                }
                case 'down': {
                    const copyState = [...state]
                    return copyState.sort((a, b) => a.name.toUpperCase() >= b.name.toUpperCase() ? -1 : 1)
                }
            }
        }
        case 'check': {
            const copyState = [...state]
            return copyState.filter(m => m.age >= action.payload ? m : '')
        }
        default:
            return state
    }
}

export const sortByAlphabet = () => ({
    type: 'sort',
    payload: 'up',
} as const)
export const sortByReverseAlphabet = () => ({
    type: 'sort',
    payload: 'down',
} as const)

export const checkByAge = (payload: number) => ({
    type: 'check',
    payload,
} as const)