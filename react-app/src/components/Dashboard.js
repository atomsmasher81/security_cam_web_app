import React from "react";
import People from '../assests/people.png'
import '../assests/css/main.css'
// const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
import { Form, Input, Button, Checkbox } from 'antd';

const layout = {

  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const LoginForm = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>



      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};



export const BackgroundImage = props => {
    return (
        <div >
            <img src={People} style={
                {
                    backgroundPosition: 'center',
                        width : '100%',
                        height : '100%',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                }
            }/>

        </div>
    )
}

const Dashboard = props =>{
    return (
        console.log('here'),
            <div>
                <div style={{margin: '7%'}}/>
                <div className= 'mainbox' >

                    < BackgroundImage/>
                    {/*<h1>Wfwf</h1>*/}

                    <div className='smallbox'>
                        <LoginForm/>
                    </div>


                </div>
            </div>
    )
}

export default Dashboard;
