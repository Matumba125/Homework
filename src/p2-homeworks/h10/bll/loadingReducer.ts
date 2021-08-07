export type LoadingActionsType = ReturnType<typeof loadingAC>

export type LoadingInitialStateType={
    isLoading: boolean
}

const initState = {
    isLoading: false
}

export const loadingReducer = (state: LoadingInitialStateType = initState, action: LoadingActionsType): LoadingInitialStateType => { // fix any
    switch (action.type) {
        case 'loading': {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean) => ({
    type: 'loading',
    isLoading
} as const)