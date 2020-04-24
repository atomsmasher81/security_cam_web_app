import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from "./router";
import CustomLayout from "./containers/layout";
import AppUserList from "./containers/AppUserListView";


function App() {
  return (
    <div className="App">
        <Router>
        <CustomLayout>
             {/*<AppUserList/>*/}
             <BaseRouter/>
        </CustomLayout>

        </Router>
    </div>
  );
}

export default App;
