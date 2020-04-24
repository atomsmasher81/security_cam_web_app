import React from "react";
import AppUsers from "../components/AppUser";
import axios from 'axios';
import Dashboard from "../components/Dashboard"

class DashboardView extends React.Component {
    state = {
        user_data:[]

    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/backend/').then(
            res =>{
                this.setState({

                    user_date :res.data
                    }
                );

                console.log(res)
            }
        )
    }
    render() {
        return (
            // <H/>
            <Dashboard data  = {this.state.user_data}/>
        );
    }
}

export default DashboardView;