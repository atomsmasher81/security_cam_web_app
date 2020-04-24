import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import CustomLayout from "./containers/layout";
import AppUserList from "./containers/AppUserListView";


function App() {
  return (
    <div className="App">
        <h1>hekko</h1>
        <CustomLayout>
             <AppUserList/>
        </CustomLayout>


    </div>
  );
}

export default App;
