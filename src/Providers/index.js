import { InterpriseListProvider } from "./interpriseList"
import { LoginProvider } from "./Login"
import { MatchProvider } from "./Match"
import { ModalProvider } from "./Modal"
import { RegisterProvider } from "./Register"

const Providers = ({children}) =>{
    return(
        <>
        <RegisterProvider>
            <LoginProvider>
                <MatchProvider>
                    <ModalProvider>
                        <InterpriseListProvider>
                            {children}
                        </InterpriseListProvider>
                    </ModalProvider>
                </MatchProvider>
            </LoginProvider>
        </RegisterProvider>
        </>
    )
}

export default Providers;
