import React from "react";
import LiveView from "../components/LiveView";
import axios from "axios";

class LiveFeedView extends React.Component {

        componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/go_live').then(
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
            <LiveView>

            </LiveView>
        )
    }
}

export default LiveFeedView;