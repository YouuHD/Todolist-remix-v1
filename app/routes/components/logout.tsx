import React from 'react';
import {useAuth0} from '@auth0/auth0-react';

const {logout} = useAuth0();

const LogoutB = () => {
    return(
        <button onClick={() => logout}>
            Logout
        </button>
    )
}

export default LogoutB;