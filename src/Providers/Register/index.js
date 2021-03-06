import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../Services/api";

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
	//const [user, setUser] = useState({});
    //const [user, setUser] = useState({})

    const userRegister = (user,setProgress) =>{

       api.post("/register",user)
           .then(res => {
               setProgress(100)
               toast.success('Conta Criada com sucesso!')
           })
           .catch(err =>{
               setProgress(20)
               toast.error('Ops! Algo deu errado')
           })
    }   

    return(
        <RegisterContext.Provider value={{userRegister}}>
            {children}
        </RegisterContext.Provider>
    )
}

export const useRegister = () => useContext(RegisterContext)
