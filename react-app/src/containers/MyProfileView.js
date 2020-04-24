import React from "react";
import MyProfile from "../components/MyProfile";
import axios from 'axios';


class MyProfileView extends React.Component {
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
            <MyProfile data  = {this.state.user_data}/>
        );
    }
}

export default MyProfileView;