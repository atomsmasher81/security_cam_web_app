import React from "react";
import { Button } from 'antd';


const CustomButton =props =>(

    <div style={{margin: 10 }}>
    <Button type="primary" block>
        {props.name}

    </Button>
  </div>

)



const Dashboard = props =>{
    return (
        console.log('here'),
            <div>
    <CustomButton name = {"I am the champ"}/>
    <CustomButton name = {"Hell yeah"}/>
    </div>
    )
}

export default Dashboard;