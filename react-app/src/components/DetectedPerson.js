import React from "react";
import '../assests/css/main.css';
import { List, Card } from 'antd';
// const { Meta } = Card;



const DetectedPerson = props => {


 return (

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
        // console.log(props.card_count)
      <List.Item  >
        <Card className="item"
            title={item.title}
            hoverable

        ><img alt="example" src={item.href} style={{"height": "100%", "width": "100%", "object-fit": "contain"}}/></Card>
      </List.Item>
    )}
  />


    )
}

export default DetectedPerson;