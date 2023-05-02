import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged,signInWithPopup, GoogleAuthProvider, GithubAuthProvider} from "firebase/auth";
import app from '../firebase/firebase.config';




export const AuthContext=createContext(null)
const auth=getAuth(app)
const googleProvider=new GoogleAuthProvider()
const githubProvider= new GithubAuthProvider()

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

const githubLogin=()=>{
    return signInWithPopup(auth, githubProvider)
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
githubLogin,
logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;