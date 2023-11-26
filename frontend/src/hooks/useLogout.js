import {useAuthContext} from './useAuthContext'

export const useLogout = () =>{
    const {dispatch} = useAuthContext()

    const logout = async () =>{
        // and remove UI from local storage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({type : 'LOGOUT'})
    }
    return {logout}
}  