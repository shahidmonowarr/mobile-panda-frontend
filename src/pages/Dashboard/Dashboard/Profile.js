import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Profile = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h1>Hello, {user.displayName}</h1>
        </div>
    );
};

export default Profile;