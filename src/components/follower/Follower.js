import React, { useEffect, useState } from 'react';

const Follower = ({rdata}) => {
 
    var follower = true;
    const rData= sessionStorage.getItem("rData");
    const [followerdata,setfollowerdata] = useState([])

    useEffect(()=>{ 
        fetch('http://localhost:5000/findfollower')
        .then (res=>res.json())
        .then(data=>
                setfollowerdata(data)    
            )
    },[])

    const followerCheck = followerdata.filter(fl=>fl.followerusername===rdata.username && fl.usernameMain==rData);
      console.log(followerCheck );
      
    if(followerCheck.length==0) {
        follower = true;
    }
    else {
        follower=false;
    }
    
    const handleCllick = ()=> {

        console.log(followerCheck);
        if(follower) {
            console.log("Now Following")
                   const newData = {
                usernameMain:rData,
                ...rdata
           }
           fetch('http://localhost:5000/follower', {
               method: 'POST',
               body: JSON.stringify(newData),
               headers: {
                 "Content-type": "application/json; charset=UTF-8"
               }
             })
             .then(response => response.json())
             .then(json => console.log(json))
             window.location.reload(false);
        }
        else {
            const newData = {
                usernameMain:rData,
                ...rdata
            }
            fetch('http://localhost:5000/deletefollower', {
               method: 'POST',
               body: JSON.stringify(newData),
               headers: {
                 "Content-type": "application/json; charset=UTF-8"
               }
             })
             .then(response => response.json())
             .then(json => console.log(json))
             window.location.reload(false);
        }
    } 
    return (
        <div>
            <div className="activeUser">
                       <div className="row">
                           <div className="col-sm-8 col-md-8 col-xl-8col-lg-8 activeUser__fullname">
                                   <p>{rdata.fullname} <small>@{rdata.username}</small></p>
                           </div>
                           <div className="col-sm-2 col-md-2 col-xl-2 col-lg-2 activeUser__follower">
                            <button  onClick={handleCllick} className="btn btn-sm btn-info">{follower?'follow':'Unfollow'}</button>
                           </div> 
                       </div>
           </div>
        </div>
    );
};

export default Follower;