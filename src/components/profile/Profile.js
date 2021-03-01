import React from 'react';
import { useParams } from 'react-router-dom';
import FeedProfile from '../feed/FeedProfile';
import LastActiveUser from '../lastActiveUser/LastActiveUser';
import SidebarProfile from '../sidebar/SidebarProfile';
import './Profile.css';
const Profile = () => {

    const id = sessionStorage.getItem("id");


    return (
        <div className="container">
        <div className="row">
            <div className="col-sm-12 col-md-12 col-xl-3 col-lg-3">
                {/* Sidebar */}
                <SidebarProfile userid={id}/>  
            </div>
            <div className="col-sm-12 col-md-12 col-xl-6 col-lg-6">
                {/* News Feed */}
                <FeedProfile userid={id}/> 
            </div>
            <div className="col-sm-12 col-md-12 col-xl-3 col-lg-3">
                {/* Last Active User */}
                <LastActiveUser userid={id}/>
            </div> 
        </div>
    </div>
    );
};

export default Profile;