import React from "react";
import DetectedPerson from "../components/DetectedPerson";
import axios from 'axios';
// import {useAuth} from "../context/auth";


var listData = [];
for (let i = 0; i < 24; i++) {
  listData.push({
      href: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: `Europe Street beat`,
      // avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: 'www.instagram.com'
  });
}

class DetectedPersonView extends React.Component {
    state = {
        user_data: listData,  //[1,2,3,4,5]
        cardcount: 8,
        listtype: "horizontal",
        user_id: 0,
        image_data:[]
    }
    resize() {
    // let currentHideNav = (window.innerWidth <= 480);
        console.log(window.innerWidth)
    if (window.outerWidth <= 480) {
        this.setState({cardcount: 1});
        this.setState({listtype: "vertical"});
    }
}
    componentDidMount() {
        // console.log(useAuth())
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();

        axios.get('http://127.0.0.1:8000/api/detected_people/').then(
            res => {
                this.setState({

                        user_data: res.data.data,
                        user_id: res.data.user_id
                    }
                );

                console.log(res)
            }
        ).then(
            e => {
                console.log(this.state.temp_image);
                var i;
                var newstate = [];
                for (i = 0; i < this.state.user_data.length; i++) {

                    var doc_url = 'http://127.0.0.1:8000/docs' + '/postprocessed/' +
                        this.state.user_id + '/' + this.state.user_data[i][0]  // +'/kartik_01/'

                    var t = new Date(this.state.user_data[i][1] * 1000);
                    var formatted_time = ('0' + t.getHours()).slice(-2) + ':' + ('0' + t.getMinutes()).slice(-2) + ':' + t.getSeconds() +
                        ' - ' + t.getDate() + '/' + t.getMonth() + '/' + t.getFullYear();

                    newstate.push(
                        {
                            'image_url': doc_url,
                            'timestamp': formatted_time
                        },
                    )
                    console.log(newstate)
                    this.setState(
                        {
                            image_data: newstate,
                        }
                    )

                }
            });
    }
    render() {

        return (

            <DetectedPerson data  = {this.state.image_data} card_count = {this.state.cardcount} type = {this.state.listtype}/>
        );
    }
}

export default DetectedPersonView;