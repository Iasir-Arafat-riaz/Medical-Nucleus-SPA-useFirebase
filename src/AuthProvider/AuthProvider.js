import React, { createContext } from 'react';
import { useFirebase } from '../hooks/useFirebase';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const allValue = useFirebase()

    return (
        <AuthContext.Provider value={allValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;