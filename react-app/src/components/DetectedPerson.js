import React from "react";
import '../assests/css/main.css';
import { List, Card } from 'antd';
// const { Meta } = Card;



const DetectedPerson = props => {


 return (
  //{ console.log(props.data) }
  <List
    itemLayout={props.listtype }
    grid={{ gutter: 16, column: 5 }}
    dataSource={props.data}
        pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize:props.card_count,
    }}
    renderItem={item => (

      <List.Item  >
        <Card className="item"
            title=  {item.timestamp}
            hoverable
            style={{ height:'20vh',width:'25vw'}}
        ><img alt="example" src={item.image_url} /></Card>
          {/*<h1>{item}</h1>*/}
      </List.Item>

    )}
  />
    //style={{"height": "100%", "width": "100%", "object-fit": "contain"}}

    )
}

export default DetectedPerson;