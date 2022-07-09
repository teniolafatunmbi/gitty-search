import { UserProp } from "../../components/users/UsersLists"

type State = {
    users: UserProp[],
    user: {},
    repos: any[],
    loading: boolean
}

const githubReducer = (state: State, action: any) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state, 
                users: action.payload,
                loading: false
            }
        
        case 'GET_USER_AND_REPOS':
            return {
                ...state, 
                user: action.payload.user,
                repos: action.payload.repos,
                loading: false
            }

        case 'CLEAR_USERS':
            return {
                ...state, 
                users: []
            }
        
        case 'SET_LOADING':
            return {
                ...state, loading: true
            }
        default:
            return state
    }
}

export default githubReducer;