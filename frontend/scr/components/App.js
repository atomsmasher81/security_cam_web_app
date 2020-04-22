import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {

        return (
            <h1>React App</h1>
        );
    }
}
// ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
// ReactDOM.render(<App /> , document.getElementById('app'));
ReactDOM.render('<h1>React App</h1>', document.getElementById('app'));

// const Some = document.getElementById('app')
// ReactDOM.render(<App />,Some );


