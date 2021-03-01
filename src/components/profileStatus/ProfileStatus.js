import React from 'react';
import { useEffect, useState } from 'react';
import PublicIcon from '@material-ui/icons/Public';
import LockIcon from '@material-ui/icons/Lock';
import './ProfileStatus.css';
const ProfileStatus = () => {

    var status = true;
    const [registerData,setRegisterData] = useState([]);
    var loggedInUserId = sessionStorage.getItem("id");

    useEffect(()=>{ 
        fetch('http://localhost:5000/Registerdata')
        .then (res=>res.json())
        .then(data=> 
            setRegisterData(data) 
            )
    },[])

    var statusregister = [];
    for(var i=0;i<registerData.length;i++) {
        if(registerData[i]._id===loggedInUserId) {
            statusregister.push(registerData[i].status);
        }
    }

    if(statusregister[0]===true) { 
        status = true;
    }
    else {
        status=false;
    }

    const handleStatusClick = () =>{
        status = !status;
        fetch(`http://localhost:5000/updatestatus/${loggedInUserId}`,{
                method: 'PUT',
                body: JSON.stringify({status}),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
            })
            window.location.reload(false);
    }

    return (
        <div className="public_private"> 
            <button onClick={handleStatusClick} className="btn btn-sm">{status?<PublicIcon/>:<LockIcon/>}</button>  
        </div> 
    );
};

export default ProfileStatus;