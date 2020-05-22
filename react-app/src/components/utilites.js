import React from "react";
import { Button } from 'antd';

const AddButton = props =>{
    return(
          <div>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="link">Link</Button>
  </div>
    )
}

export default AddButton;