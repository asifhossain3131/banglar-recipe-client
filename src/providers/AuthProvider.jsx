import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged,signInWithPopup, GoogleAuthProvider, GithubAuthProvider, sendPasswordResetEmail} from "firebase/auth";
import app from '../firebase/firebase.config';




export const AuthContext=createContext(null)
const auth=getAuth(app)
const googleProvider=new GoogleAuthProvider()
const githubProvider= new GithubAuthProvider()

const AuthProvider = ({children}) => {
    // all states are here 
const [user, setUser]=useState(null);
const [loading,setLoading]=useState(true)

// user related all functionalities
const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const profileUpdate=(currentUser, name, photo)=>{
  return updateProfile(currentUser, {
    displayName: name,
    photoURL: photo
  })
}

const login=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

const logout=()=>{
    return signOut(auth)
}

const googleLogin=()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
}

const githubLogin=()=>{
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
}

// reset password 
const resetPassword=email=>{
    return sendPasswordResetEmail(auth, email)
}

// user observer 
useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
        setLoading(false)
        })
        return ()=>unsubscribe()
},[])


    const authInfo={
user,
createUser,
profileUpdate,
login,
googleLogin,
githubLogin,
logout,
resetPassword,
loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;