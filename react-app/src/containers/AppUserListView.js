import React from "react";
import TrustuserList from "../components/AppUser";
import axios from 'axios';
import '../assests/css/main.css';



class AppUserList extends React.Component {
    state ={
        appusers : [],
        updated_user:[],
        temp_image :[],
    }

    componentDidMount() {
                console.log('res.data.data');
        axios.get('http://127.0.0.1:8000/api/trusted_people/').then(
            res => {
                console.log('res.data.data');
                console.log(res.data.images);
                this.setState({
                    appusers: res.data.data,
                    temp_image:res.data.images
                });



            }
        ).then(e => {
            console.log(this.state.appusers)
            var i;
            var newstate = [];
            for (i = 0; i < this.state.temp_image.length; i++) {

                var doc_url = 'http://127.0.0.1:8000/docs'+ '/trusted_people/' +
                    this.state.appusers[0]['user_id'] +'/'  + this.state.temp_image[i] + '/1.jpeg'  // +'/kartik_01/'
                newstate.push(
                    {
                        'name':this.state.appusers[i]['name'],
                        'relation':this.state.appusers[i]['relation'],
                        'image_file':doc_url
                    },
                )
                // console.log(newstate)
            this.setState(
                {
                    updated_user :newstate
                }
            )
                // console.log("dsdsdsdsds")
                console.log(this.state.updated_user)
            //     console.log(doc_url)
            //     axios.get(doc_url).then(
            //         res => {
            //             var newSelected = this.state.temp_image;
            //
            //             newSelected.push(res.data);
            //             this.setState({temp_image: newSelected});
            //
            //
            //         });
            //     console.log(this.state.temp_image[i])
            //     this.state.updated_user.push({
            //         'name': this.state.appusers[i]['name'],
            //         'relation': this.state.appusers[i]['relation'],
            //         'image_file': this.state.temp_image
            //
            //     })
            //
            // }
            // console.log(this.state.updated_user);
            // console.log(this.state.temp_image)
        }})
    }

    render() {
        return (
            // <H/>
            <TrustuserList data  = {this.state.updated_user}/>
        );
    }
}

// class DetectedPeopleList extends React.Component {
//     state ={
//         people : []
//     }
//
//     componentDidMount() {
//         axios.get('http://127.0.0.1:8000/backend').then(
//             res => {
//                 this.setState({
//                     people: res.data
//                 });
//             console.log(res.data)
//
//             }
//         )
//     }
//
//     render() {
//         return (
//             // <H/>
//             <TrustuserList data  = {this.state.people}/>
//         );
//     }
// }

export default AppUserList;
// export {DetectedPeopleList} ;