import React from 'react';
import { firestore } from '../firebase/firebase';
import { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';

function SearchProfiles() {
    const dataRef = firestore.collection('users');
    const query = dataRef;
    const [term, setTerm] = useState('');

    const [userProfiles] = useCollectionData(query, { idField: 'id' });

    return (
        <div className="container mt-4">
                <h3>Search Profiles</h3>
                <form className="pt-3">
                    <input placeholder="Enter search term here"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    className="input"/>
                </form>
                <div>
                {userProfiles && userProfiles.map(profile => <ProfileData key={profile.id} data={profile} />)}
                </div>
        </div>
    );
}

function ProfileData(props) {
    const { displayName, courses, skills, photoURL, uid } = props.data;

    return (  
        <ul className="list-group pt-3">
            <li className="list-group-item">
            <div className="media row-3 justify-content-center pt-3">
                <a href={`view-profile/${uid}`}>
                    <img src={photoURL} className="align-self-center mr-3" alt="" />
                </a>
                    <div className="media-body">
                        <h5>{displayName}</h5>
                        <div className="pt-1 pl-2">
                            <strong>Courses: </strong>
                            {courses && courses.map(course => <span key={course}>{course} | </span>)}
                        </div>
                        <div className="pt-1 pl-2">
                            <strong>Skills: </strong>
                            {skills && skills.map(skill => <span key={skill}>{skill} | </span>)}
                        </div>
                    </div>
                </div>
            </li>
        </ul> 
    );
}

export default SearchProfiles; 