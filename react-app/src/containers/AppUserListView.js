import React from "react";
import TrustuserList from "../components/AppUser";
import axios from 'axios';
import '../assests/css/main.css';


const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

class AppUserList extends React.Component {
    state ={
        appusers : []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/backend').then(
            res => {
                this.setState({
                    appusers: res.data
                });
            console.log(res.data)

            }
        )
    }

    render() {
        return (
            // <H/>
            <TrustuserList data  = {this.state.appusers}/>
        );
    }
}

class DetectedPeopleList extends React.Component {
    state ={
        people : []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/backend').then(
            res => {
                this.setState({
                    people: res.data
                });
            console.log(res.data)

            }
        )
    }

    render() {
        return (
            // <H/>
            <TrustuserList data  = {this.state.people}/>
        );
    }
}

export default AppUserList;
// export {DetectedPeopleList} ;