import React from "react";
import { Route } from 'react-router-dom';
import AppUserList from "./containers/AppUserListView";
import { DetectedPeopleList } from "./containers/AppUserListView";
import MyProfileView from "./containers/MyProfileView";


const BaseRouter = () => (
        <div>
            < Route exact path = '/' component = {AppUserList}/>
            < Route exact path = '/manage_person' component = {AppUserList}/>
            < Route exact path = '/detected_person' component = {DetectedPeopleList}/>
            < Route exact path = '/my_profile' component = {MyProfileView}/>

        </div>
);
export default BaseRouter;