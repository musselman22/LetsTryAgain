import React from 'react';
import { firestore } from '../firebase/firebase';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { useParams } from 'react-router-dom';

function ViewProfile() {
    let { id } = useParams();
    const documentRef = firestore.collection('users').doc(id);

    const [userProfile] = useDocumentData(documentRef);

    return (<>
            {userProfile && <ProfileData data={userProfile} />}
            </>
    );
}

function ProfileData(props) {
    const { displayName, courses, skills, photoURL, email } = props.data;

    return (  
        <div className="container mt-4">
        <div className="row">
            <div className="media col-3 justify-content-center">
                <img src={photoURL} className="align-self-center mr-3" alt=""></img>
            </div>
            <div className="col text-center mr-5">
                <h1>{displayName}</h1>
                <h5>{email}</h5>
            </div>
        </div>
        <div className="row pt-5">
            <div className="col">
                <h4 className="text-center">Skills</h4>
                    <div>
                        <ul className="list-group list-group-flush pt-3">
                            {skills && skills.map(skill => <li className="list-group-item" key={skill}>{skill}</li>)}
                        </ul>
                    </div>
            </div>
            <div className="col">
                <h4 className="text-center">OSU Courses</h4>
                    <div>
                        <ul className="list-group list-group-flush pt-3">
                            {courses && courses.map(course => <li className="list-group-item" key={course}>{course}</li>)}
                        </ul>
                    </div>
            </div>
        </div> 
</div>
    );
}

export default ViewProfile; 