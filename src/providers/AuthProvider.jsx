import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged,signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import app from '../firebase/firebase.config';




export const AuthContext=createContext(null)
const auth=getAuth(app)
const googleProvider=new GoogleAuthProvider()

const AuthProvider = ({children}) => {
const [user, setUser]=useState(null);

const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

const profileUpdate=(currentUser, name, photo)=>{
  return updateProfile(currentUser, {
    displayName: name,
    photoURL: photo
  })
}

const login=(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}

const logout=()=>{
    return signOut(auth)
}

const googleLogin=()=>{
    return signInWithPopup(auth, googleProvider)
}

useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
        })
        return ()=>unsubscribe()
},[])



    const authInfo={
user,
createUser,
profileUpdate,
login,
googleLogin,
logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;