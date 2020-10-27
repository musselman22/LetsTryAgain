import React from 'react';
import { auth , firestore } from '../firebase/firebase';
import firebase from 'firebase/app';
import {useState, useEffect} from 'react';

function Auth() {

    const [loggedIn, setLoggedIn] = useState("start");
    
    const userRef = firestore.collection('users');

    useEffect(() => {
    });

    const onAuthChange = () => {

        if (auth.currentUser != null) {
            signOutUser();
            setLoggedIn("false");
            
            
        } else {
            signInUser();
            setLoggedIn("true");
        }
    }
    
    const signOutUser = () => {
        auth.signOut();
        console.log("logged out");
    }

    const setupUser = async () => {
        const { uid, email, photoURL, displayName } = auth.currentUser;
        await userRef.doc(uid).set({
            uid,
            email,
            photoURL,
            displayName,
            skills: [],
            courses: []
        }, {merge: true}).then(function() {
        }).catch(function(error) {
            console.log("there was an error", error);
        });
    }

    const signInUser = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        await auth.signInWithPopup(provider);
        const { uid } = auth.currentUser;
        await userRef.doc(uid).get().then(function(doc) {
            if (doc.exists) {
                console.log("returning user");
            } else {
                console.log("no such user");
                setupUser();
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        })
        console.log("signed in");
    }
  
    if (loggedIn === "start"){
        auth.onAuthStateChanged(function(user) {
            if(user) {
                setLoggedIn("true");

            } else {
                setLoggedIn("false");

            }
        });
    }

    if (loggedIn === "start") {
        return (
            <div className="spinner-grow">
            </div>
        );
    } else {
        return (
            <button className="btn btn-danger" onClick={(e) => {onAuthChange()}}>{loggedIn === "true" ? "Sign Out" : "Sign In With Google"}</button>
        );
    }
}

export default Auth;