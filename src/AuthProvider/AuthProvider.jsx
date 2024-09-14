import { createContext, useEffect, useState } from "react";
export const authContext = createContext(null);
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase.config";
import useAxiosCommon from "../hooks/useAxiosCommon";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const axiosCommon = useAxiosCommon()

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
      if (currentUser) {
        // get token and store client
        const userInfo = { email: currentUser.email }
        axiosCommon.post("/jwt", userInfo)
          .then(res => {
            if (res.data.token) {
              localStorage.setItem("access-token", res.data.token);
              setLoading(false);
            }
          })
      } else {
        // remove token
        localStorage.removeItem("access-token")
        setLoading(false);
      }

    });
    return () => {
      unSubscribe();
    };
  }, [axiosCommon]);

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
