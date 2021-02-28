import React from 'react';
import './LastActiveUser.css';
import { useEffect, useState } from 'react';
import Follower from '../follower/Follower';
const LastActiveUser = (props) => {

    const [registerData,setRegisterData] = useState([]);

    useEffect(()=>{ 
        fetch('http://localhost:5000/Registerdata')
        .then (res=>res.json())
        .then(data=> 
            setRegisterData(data)
            )
    },[]) 

    const ExceptOwnUser = registerData.filter(fl=>fl._id!==props.userid);

    return (  
        <div className="lastActiveUser">
            <h5>Last Active User</h5> 
            {
                ExceptOwnUser.map(rdata=> 
                    <Follower rdata={rdata} />
                    )
            }
        </div>
    );
};

export default LastActiveUser;