import React from 'react';
import { firestore, auth } from '../firebase/firebase';
import {useState, useEffect} from 'react';
import firebase from 'firebase/app';

function UserProfile() {
    const [userData, setUserData] = useState("start");
    const [loggedIn, setLoggedIn] = useState("start");
    const [skill, setSkill] = useState('');
    const [course, setCourse] = useState('');
    
    useEffect(() => {
        const getUserData = () => {
            if (auth.currentUser != null) {
                const { uid } = auth.currentUser;
                firestore.collection('users').doc(uid).get().then(function(doc) {
                    console.log("yo homie")
                    setUserData(doc.data());
                    return (
                        <h1>This stinks a little</h1>
                    );
        
                }).catch(function(error) {
                    console.log("error getting data: ", error);
                })
            } else {
                console.log("need to login");
                return (
                    <h1>This stinks</h1>
                );
            }
        }
        getUserData();
    },[skill, course]);

    const onAddUserSkill = async (e) => {
        e.preventDefault();
        const { uid } = auth.currentUser;
        await firestore.collection('users').doc(uid).update({
            skills: firebase.firestore.FieldValue.arrayUnion(skill)
        });
        setSkill('');
    }

    const deleteSkill = async (skill) => {
        console.log(skill);
        const { uid } = auth.currentUser;
        await firestore.collection('users').doc(uid).update({
            skills: firebase.firestore.FieldValue.arrayRemove(skill)
        });
        setSkill(`${skill} deleted`);
    }

    const onAddUserCourse = async (e) => {
        e.preventDefault();
        const { uid } = auth.currentUser;
        await firestore.collection('users').doc(uid).update({
            courses: firebase.firestore.FieldValue.arrayUnion(course)
        });
        setCourse('');
    }

    const deleteCourse = async (course) => {
        console.log(course);
        const { uid } = auth.currentUser;
        await firestore.collection('users').doc(uid).update({
            courses: firebase.firestore.FieldValue.arrayRemove(course)
        });
        setCourse(`${course} deleted`);
    }

    if (loggedIn === "start"){
        auth.onAuthStateChanged(function(user) {
            if(user) {
                setSkill();
                // getUserData();
                setLoggedIn("true");

            } else {
                setLoggedIn("false");

            }
        });
    }

    if (loggedIn === "true") {
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="media col-3 justify-content-center">
                        <img src={userData === "start" ? "" :userData.photoURL} className="align-self-center mr-3" alt=""></img>
                    </div>
                    <div className="col text-center mr-5">
                        <h1>{userData === "start" ? "Sign in to view profile" : userData.displayName}</h1>
                        <h5>{userData.email}</h5>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col">
                        <h4 className="text-center">Skills</h4>
                            <div>
                                <ul className="list-group list-group-flush pt-3">
                                    {userData !== "start" && userData.skills !== undefined && userData.skills.map(skill =>
                                         <li className="list-group-item" key={skill}>{skill}<button onClick={() => deleteSkill(skill)}className="float-right btn btn-danger">Delete</button></li>)}
                                </ul>
                            </div>
                       
                            <div className="pt-3">
                                <form onSubmit={onAddUserSkill}>
                                    <input type="text" value={skill || ''} onChange={(e) => setSkill(e.target.value)} placeholder="Enter Skill" />
                                    <button type="submit" className="btn btn-success ml-3" disabled={!skill}>Add Skill</button>
                                </form> 
                            </div>
                    </div>
                    <div className="col">
                        <h4 className="text-center">OSU Courses</h4>
                            <div>
                                <ul className="list-group list-group-flush pt-3">
                                    {userData !== "start" && userData.courses !== undefined && userData.courses.map(course => 
                                    <li className="list-group-item" key={course}>{course}<button onClick={() => deleteCourse(course)}className="float-right btn btn-danger">Delete</button></li>)}
                                </ul>
                            </div>
                       
                            <div className="pt-3">
                                <form onSubmit={onAddUserCourse}>
                                    <input type="text" value={course || ''} onChange={(e) => setCourse(e.target.value)} placeholder="Enter Course" />
                                    <button type="submit" className="btn btn-success ml-3" disabled={!course}>Add Course</button>
                                </form> 
                            </div>
                    </div>
                </div> 
        </div>
        )
    } else if (loggedIn === "start"){
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border mt-5">
                </div>
            </div>
        );
    } else {
        return (
            <div className="container mt-3">
                <h1>Sign In To View Profile</h1>
            </div>
        );
    }

}

export default UserProfile; 