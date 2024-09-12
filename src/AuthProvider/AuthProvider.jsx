import {createContext, useEffect, useState} from "react";
export const authContext = createContext(null);
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase.config";

const AuthProvider = ({children}) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const signUpSystem = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInSystem = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutSystem = () => {
    return signOut(auth);
  };

  const profileUpdateSystem = (photoURL) => {
    return updateProfile(auth.currentUser, {
      photoURL: photoURL,
    });
  };
  const profileNameUpdateSystem = (name) => {
    return updateProfile(auth.currentUser, {
      photoURL: name,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [user]);

  const authInfo = {
    user,
    loading,
    signUpSystem,
    signInSystem,
    logOutSystem,
    profileUpdateSystem,
    profileNameUpdateSystem,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
