import React from "react";
import axios from 'axios';
import Dashboard from "../components/Dashboard"
import Redirect from "react-router-dom/es/Redirect";
// import {useAuth} from "../context/auth";


class DashboardView extends React.Component {
    constructor(props) {
        super(props);

        this.HandleFormSubmit = this.HandleFormSubmit.bind(this)
    }
    state = {
            username: "",
            password: "",
            redirectToDashboard: false,
            user_data:[]
    };



    HandleFormSubmit = values =>{
        // const { setAuthTokens } = useAuth();
        console.log('hey,i have been waiting for you!');
        console.log(values.username,values.password)

        axios.post("http://loaclhost/api/token", {
          "username":values.username,
          "password": values.password
        }).then(result => {
          if (result.status === 200) {
            // setAuthTokens(result.data);
              console.log(result.data)
          } else {
            console.log('result')
            console.log(result)
          }
        })


        this.setState({redirectToDashboard: true})
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
        const redirectToDashboard = this.state.redirectToDashboard;
        if (redirectToDashboard === true) {
            return <Redirect to="/manage_person" />
        }
        return (
            // <H/>


            <Dashboard data  = {this.state.user_data} form = {this.HandleFormSubmit} />


        );
    }
}
// class DashboardView extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       age: null,
//     };
//   }
//   myChangeHandler = (event) => {
//     let nam = event.target.name;
//     let val = event.target.value;
//     this.setState({[nam]: val});
//   }
//   render() {
//     return (
//       <form>
//       <h1>Hello {this.state.username} {this.state.age}</h1>
//       <p>Enter your name:</p>
//       <input
//         type='text'
//         name='username'
//         onChange={this.myChangeHandler}
//       />
//       <p>Enter your age:</p>
//       <input
//         type='text'
//         name='age'
//         onChange={this.myChangeHandler}
//       />
//       </form>
//     );
//   }
// }

export default DashboardView;