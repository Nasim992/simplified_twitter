import React from 'react';
import './LastActiveUser.css';
import { useEffect, useState } from 'react';
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
                    <div className="activeUser">
                       <div className="row">
                           <div className="col-sm-8 col-md-8 col-xl-8col-lg-8 activeUser__fullname">
                                   <p>{rdata.fullname} <small>@{rdata.username}</small></p>
                           </div>
                           <div className="col-sm-2 col-md-2 col-xl-2 col-lg-2 activeUser__follower">
                           <form>
                            <input 
                            type="hidden"
                            name="follow"
                            />
                            <button type="submit" name="submit__follow" className="btn btn-sm btn-info">Follow</button>
                            </form>
                           </div>
                       </div>
                    </div>
                    )
            }

        </div>
    );
};

export default LastActiveUser;