import React from "react";
import { Route} from 'react-router-dom';
import AppUserList from "./containers/AppUserListView";
import MyProfileView from "./containers/MyProfileView";
import DetectedPersonView from "./containers/DetectedPersonList";
import DashboardView from "./containers/DashboardView";
import CustomLayout from "./containers/layout";
import LiveFeedView from "./containers/LiveFeed";
import AddTrustedPeopleView from "./containers/AddTrustedPeopleView";
import MainView from "./containers/MainView";



const BaseRouter = () => (
        <div>

            <CustomLayout >
                < Route exact path = '/sign_in' component = {DashboardView}/>
                < Route exact path = '/' component = {MainView}/>
                < Route exact path = '/manage_person' component = {AppUserList}/>
                < Route exact path = '/detected_person' component = {DetectedPersonView}/>
                < Route exact path = '/my_profile' component = {MyProfileView}/>
                < Route exact path = '/live' component = {LiveFeedView}/>
                < Route exact path = '/add_person' component = {AddTrustedPeopleView}/>

            </CustomLayout>


        </div>
);
export default BaseRouter;