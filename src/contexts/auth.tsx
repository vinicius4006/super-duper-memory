import { createContext } from "react";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthContextData {
    signed: boolean;
    token: string;
    user: object;
}

export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({children}) => (
    <AuthContext.Provider value={{signed: false, token: "", user: {}}}>
        {children}
    </AuthContext.Provider>
);


export default AuthContext;