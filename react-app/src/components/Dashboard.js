import React from "react";
import People from '../assests/people.png';
import '../assests/css/main.css';
// const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
import { Form, Input, Button } from 'antd';

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class LoginForm extends React.Component {


        render() {

            return (


                <div>
                <Form onFinish={this.props.uform}>
                    <Form.Item
                        label="Username"
                        name="username"
                    
                    >
                        <Input/>
                    </Form.Item>
                    
                    <Form.Item
                        label="Password"
                        name="password"
                    
                    >
                        <Input.Password/>
                    </Form.Item>


                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>

                    </div>
            );
        };

}

export const BackgroundImage = props => {
    return (
        <div >
            <img src={People} alt="example" style={
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

class Dashboard extends React.Component {

    render() {


        return (
                <div>
                    <div style={{margin: '7%'}}/>
                    <div className='mainbox'>

                        < BackgroundImage/>
                        {/*<h1>Wfwf</h1>*/}

                        <div className='smallbox'>
                            <h1>Login</h1>
                            <LoginForm uform = {this.props.form}/>
                        </div>


                    </div>
                </div>
        )
    }
}

export default Dashboard;
