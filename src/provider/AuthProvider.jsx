import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
  

export const AuthContext = createContext(null);
const auth = getAuth(app)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(null)

  const googleProvider = new GoogleAuthProvider()

  const signUp = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
       displayName: name, photoURL: photo
    })

  }

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser)
      console.log(currentUser)
      setLoading(false)

      //TODO Axios
    })
    return () => {
      return unsubscribe()
    }
  }, [])

  
  
  
  const authInfo ={
    user,
    loading,
     signUp,
     signIn,
     signInWithGoogle,
     logOut,
     updateUserProfile,


  }

 

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;