import React from "react";
import { List } from 'antd';
import { Button } from 'antd';
// import Img from '../assests/people.png'
import '../assests/css/trusted_user.css';
import {Link} from "react-router-dom";


const TrustedPerosn = (props) =>{
    return (
            <div  className="trust_cover_box" style={{}}>
                <>


                        <div  className="trust_upper_box" style={{display:"flex","justify-content": "space-between",width:"100%","padding-bottom":"24px"}}>
                            <h2>Here are the people that you trust..</h2>
                            <Button type="primary"><Link to="/add_person"> Add person</Link></Button>
                        </div>

                    <List
                      size="large"
                      // header={<div>Header</div>}
                      // footer={<div>Footer</div>}
                      bordered
                      dataSource={props.data}
                      renderItem={item => <List.Item>

                          <div style={{height:"100px"  ,width:'100%',padding:"2%"}}>
                              <div style={{display:"flex","justify-content": "space-between"}}>
                                  {/*<h1 style={{    display: "flex","align-items": "center"}}>{item.id}</h1>*/}
                                  <h1 style={{    display: "flex","align-items": "center","width":"30px"}}>{item.name}</h1>
                                  <h3 style={{    display: "flex","align-items": "center"}}>{item.relation}</h3>
                                                    <img src= {item.image_file} style={{width:"100px",height:"100px" ,}} alt="hmm"/>
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