import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AppUserList from "./containers/AppUserListView";
import MyProfileView from "./containers/MyProfileView";
import DetectedPersonView from "./containers/DetectedPersonList";
import DashboardView from "./containers/DashboardView";
import CustomLayout from "./containers/layout";
import LiveFeedView from "./containers/LiveFeed";


const BaseRouter = () => (
        <div>

            <CustomLayout >
                < Route exact path = '/' component = {DashboardView}/>
                < Route exact path = '/manage_person' component = {AppUserList}/>
                < Route exact path = '/detected_person' component = {DetectedPersonView}/>
                < Route exact path = '/my_profile' component = {MyProfileView}/>
                < Route exact path = '/live' component = {LiveFeedView}/>

            </CustomLayout>


        </div>
);
export default BaseRouter;