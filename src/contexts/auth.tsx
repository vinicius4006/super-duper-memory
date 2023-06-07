import { createContext, useEffect, useState } from "react";

import * as auth from "../services/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthContextData {
    signed: boolean;
    user: object | null;
    signIn(): Promise<void>;
    signOut(): void;
}

export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({children}) => {

    useEffect(() => {
        const loadStorageData = async () => {
            const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
            const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

            if (storagedUser && storagedToken){
                setUser(JSON.parse(storagedUser));
            }
        }

        loadStorageData();
    });

    const [user, setUser] = useState<object | null>(null);

    const signIn = async () => {
        const response = await auth.signIn();
        setUser(response.user);

        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
        await AsyncStorage.setItem('@RNAuth:token', response.token);
    }

    const signOut = async () => {
        await AsyncStorage.clear();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{signed: !!user, user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}


export default AuthContext;