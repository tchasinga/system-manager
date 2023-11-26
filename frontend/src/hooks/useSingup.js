import { useState } from "react";
import {useAuthContext} from './useAuthContext'

export const useSingup = () =>{
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const singup =  async (email, password) =>{
        setIsLoading(true)
        setError(null)

        const response = await fetch('https://management-api-location.onrender.com/api/user/signup',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({email, password})
        })
        const json = await response.json();
        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            // save the user to local storage
          localStorage.setItem('user', JSON.stringify(json))
           // update the status context
        dispatch({type : 'LOGIN', payload : json})
        setIsLoading(false)
        }
    } 

    return {singup, error, isLoading}
}
