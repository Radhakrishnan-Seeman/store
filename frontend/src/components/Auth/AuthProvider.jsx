import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const useAuth = ()=>useContext(AuthContext);

function AuthProvider({children}) {
    const [isAuthendicated,setIsAuthendicated] = useState(false);
    const login = (e)=> {
        setIsAuthendicated(true);
    };
    const logout = ()=> setIsAuthendicated(false);
    return (
        <AuthContext.Provider value={{isAuthendicated,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;