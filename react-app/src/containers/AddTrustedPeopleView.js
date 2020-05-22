import React from "react";
import axios from 'axios';
import { Form, Input, Button ,Upload} from 'antd';
import {  InboxOutlined } from '@ant-design/icons';
import Redirect from "react-router-dom/es/Redirect";

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const normFile = e => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

class AddTrustedPeopleView extends React.Component {
    constructor(props) {
        super(props);
        this.HandleFormSubmit = this.HandleFormSubmit.bind(this)
    }
    state = {
        user_data:[],
        redirectToManagePerson : false

    }
    HandleFormSubmit = values =>{

        console.log('hey,i have been waiting for you!');
        console.log(values)


        console.log(values.myimage[0].originFileObj)
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('relation', values.relation);
        formData.append('image', values.myimage[0].originFileObj);
        axios.post('http://127.0.0.1:8000/api/trusted_people/',formData,{headers: {"Content-type": "multipart/form-data"}}).then(
            res =>{
                // this.setState({
                //
                //     user_date :res.data
                //     }
                // );

                console.log(res)
                this.setState({redirectToManagePerson: true})
            });

    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/backend/').then(
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
        const redirectToManagePerson = this.state.redirectToManagePerson;
        if (redirectToManagePerson === true) {
            return <Redirect to="/manage_person" />
        }
        return (
            // <H/>


             <div>
                <Form onFinish={this.HandleFormSubmit}>
                    <Form.Item
                        label="Name"
                        name="name"

                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Relation"
                        name="relation"

                    >
                        <Input/>
                    </Form.Item>
                     <Form.Item label="Dragger">
        <Form.Item name="myimage" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
          <Upload.Dragger name="image" action=""  beforeUpload={() => false}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            {/*<p className="ant-upload-hint">Support for a single or bulk upload.</p>*/}
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>

                    </div>

        );
    }
}

// }

export default AddTrustedPeopleView;