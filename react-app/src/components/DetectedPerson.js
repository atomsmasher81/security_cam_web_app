import React from "react";
// import {Avatar, Card, Col, Row} from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
// import List from "antd/es/list";
import { List, Card } from 'antd';
const { Meta } = Card;

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];

const IconText = ({ icon, text }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);
                {/*<Col span={5}>*/}
                {/*    <Card*/}
                {/*        hoverable*/}
                {/*        style={{ width: 240 }}*/}
                {/*        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}*/}
                {/*      >*/}
                {/*        <Meta title="Europe Street beat" description="www.instagram.com" />*/}
                {/*    </Card>*/}
                {/*</Col>*/}
const DetectedPerson = props => {
    return (

  <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3,
    }}
    dataSource={props.data}
    renderItem={item => (
        console.log(props.data),
      <List.Item >
         <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={item.href} />}
    >
        <Meta title={item.title} description={item.description} />
        </Card>
      </List.Item>
    )}
  />

    )
}

export default DetectedPerson;