import React from 'react';
import '../../App.css';
import Feed from '../feed/Feed';
import Sidebar from '../sidebar/Sidebar';
import LastActiveUser from '../lastActiveUser/LastActiveUser';
import {
    useParams
  } from "react-router-dom";
const Home = () => {
    let { id } = useParams();
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-xl-2 col-lg-2">
                    {/* Sidebar */}
                    <Sidebar/> 
                </div>
                <div className="col-sm-12 col-md-12 col-xl-6 col-lg-6">
                    {/* News Feed */}
                    <Feed userid={id}/>
                </div>
                <div className="col-sm-12 col-md-12 col-xl-4 col-lg-4">
                    {/* Last Active User */}
                    <LastActiveUser/>
                </div> 
            </div>
        </div>
    );
};

export default Home;