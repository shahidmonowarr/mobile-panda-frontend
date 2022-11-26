import { useEffect, useState } from "react";

const useToken = user => {
    const [token, setToken] = useState('');
    
    useEffect(() => {
        // console.log("user inside useToken",user);
        const email = user?.user?.email;
        const currentUser = {email: email};

        if(email){
            fetch(`https://mobile-panda.onrender.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                // console.log("data inside useToken", data);
                const accessToken = data.token;
                localStorage.setItem('token', accessToken);
                setToken(accessToken);
            })
        }
    }, [user]);
    
    return token;
    };

export default useToken;