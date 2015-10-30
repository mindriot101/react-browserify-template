import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
    render() {
        return <p>This is a test</p>;
    }
}

ReactDOM.render(
    <HelloWorld />,
    document.getElementById("main")
);
