import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {

        return (
            <h1>React App</h1>
        );
    }
};
// ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
// ReactDOM.render(<App /> , document.getElementById('app'));
ReactDOM.render('<h1>React App</h1>', document.getElementById('app'));
ReactDOM.render('<h1>React App ss</h1>', document.getElementById('some'));

const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// var elem = React.createElement('h1',{},"Hello");
ReactDOM.render(JSX,document.getElementById('app') );


const Jsx = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// var elem = React.createElement('h1',{},"Hello");
ReactDOM.render(Jsx,document.getElementById('app'),window.react_mount);