import { Layout, Menu } from 'antd';
import React from "react";
import { Link } from "react-router-dom";
import Avatar from "antd/es/avatar";
// import { UserOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;



const CustomLayout = (props) => {
    return (

  <Layout style={{ height:"100vh" }}>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%'  }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="0"><Link to="/">  <Avatar src="https://image.flaticon.com/icons/svg/417/417629.svg" /></Link></Menu.Item>
        {/*<Menu.Item key="1"><Link to="/"> dashboard</Link></Menu.Item>*/}
        <Menu.Item key="2"><Link to="/manage_person"> Trusted Person</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/live"> Go Live</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/detected_person"> Detected Person</Link></Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64}}>
      {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
      {/*  <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
      {/*  <Breadcrumb.Item>List</Breadcrumb.Item>*/}
      {/*  <Breadcrumb.Item>App</Breadcrumb.Item>*/}
      {/*</Breadcrumb>*/}
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 ,height: '100%'}}>
          {props.children}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Created by Kartik</Footer>
  </Layout>
    );
}

export default CustomLayout;