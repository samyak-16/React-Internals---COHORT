import {createContext , useContext , useState} from "react"



const notificationContext = createContext()



export function NotificationProvider({children}){


    const [count,setCount] = useState(0)


    const addNotification = ()=>{
setCount((prev)=> prev+1)
    };

    const resetNotification = ()=>{
        setCount(0);
    };

    return(
        <notificationContext.Provider value={{count , addNotification , resetNotification}}>

{children}
        </notificationContext.Provider>
    )
}

//Custom hook



export function useNotification(){

return useContext(notificationContext)


}