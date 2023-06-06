import { createContext, useState } from "react";
import * as auth from "../services/auth";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthContextData {
    signed: boolean;
    user: object | null;
    signIn(): Promise<void>;
}

export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
    const [user, setUser] = useState<object | null>(null);

    const signIn = async () => {
        const response = await auth.signIn();
        setUser(response.user);
    }

    return (
        <AuthContext.Provider value={{signed: !!user, user, signIn}}>
            {children}
        </AuthContext.Provider>
    );
}


export default AuthContext;