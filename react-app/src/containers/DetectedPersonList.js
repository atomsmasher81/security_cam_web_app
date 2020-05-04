import React from "react";
import axios from 'axios';
import DetectedPerson from "../components/DetectedPerson";


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
        listtype: "horizontal"
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

    window.addEventListener("resize", this.resize.bind(this));
    this.resize();

        // axios.get('http://127.0.0.1:8000/backend/').then(
        //     res =>{
        //         this.setState({
        //
        //             user_date :res.data
        //             }
        //         );
        //
        //         console.log(res)
        //     }
        // )
        this.setState([{user_data: listData}])
    }
    render() {
        return (

            <DetectedPerson data  = {this.state.user_data} card_count = {this.state.cardcount} type = {this.state.listtype}/>
        );
    }
}

export default DetectedPersonView;