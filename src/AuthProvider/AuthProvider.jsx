import { createContext, useEffect, useState } from 'react';
export const authContext = createContext(null)
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../Firebase.config';

const AuthProvider = ({ children }) => {

    const { user, setUser } = useState([])
    const { loading, setLoading } = useState(false)


    const signUpSystem = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInSystem = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
        })
        return () => {
            unSubscribe()
        }
    })


    const authInfo = { user, loading, signUpSystem, signInSystem }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;