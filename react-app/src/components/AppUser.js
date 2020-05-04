import React from "react";
import { List, Typography, Divider } from 'antd';
import { Button } from 'antd';
import Img from '../assests/people.png'

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const TrustedPerosn = (props) =>{
    return (
            <div style={{"margin-right":"25%","margin-left":"25%"}}>
                <>


                        <div style={{display:"flex","justify-content": "space-between",width:"100%","padding-bottom":"24px"}}>
                            <h2>Here are the people that you trust..</h2>
                            <Button type="primary" >Add person</Button>
                        </div>

                    <List
                      size="large"
                      // header={<div>Header</div>}
                      // footer={<div>Footer</div>}
                      bordered
                      dataSource={data}
                      renderItem={item => <List.Item>
                          <div style={{height:"100px"  ,width:'100%',padding:"2%"}}>
                              <div style={{display:"flex","justify-content": "space-between"}}>
                                  <h3 style={{    display: "flex","align-items": "center"}}>{item}</h3>
                                                    <img src= {Img} style={{width:"100px",height:"100px" ,"border-radius": "50px 50px 5px 30px"}} alt="hmm"/>
                                </div>
                              <hr/>
                          </div>
                                            </List.Item>}
                    />
                  </>
            </div>
        )
}

export default TrustedPerosn;