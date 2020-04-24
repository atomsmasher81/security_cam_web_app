import React from "react";
import AppUser from "../components/AppUser";

const H = props =>(
    <h1>Hekkco</h1>
)
class AppUserList extends React.Component {
    render() {
        return (
            // <H/>
            <AppUser/>
        );
    }
}

export default AppUserList;