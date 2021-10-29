import { firebaseInitialize } from "../firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";

firebaseInitialize();

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  //For Google Sign In
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider).catch((error) => {
      setError(error.message);
    });
  };

  //Sign in User
  const userSignInWithEmailPass = (email, password) => {
    return (
      signInWithEmailAndPassword(auth, email, password)
        // .then((result) => {
        //   // Signed in
        // setUser(result.user);
        //   // ...
        // })
        .catch((error) => {
          setError("Wrong email or password");
        })
    );
  };

  //Sign Out User
  const userSignOut = () => {
    // setLoading(true)
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => {
        // setLoading(false)
        window.location.reload();
      });
  };

  //stable in user
  useEffect(() => {
    setLoading(true)
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
      }
      setLoading(false)
    });
  }, []);

  return {
    user,
    googleSignIn,
    error,
    userSignOut,
    setUser,
    setError,
    userSignInWithEmailPass,
    loading
  };
};
export { useFirebase };

//--------------------THANKS TO YOU FOR YOUR TIME AND SUPPORT---------------
