var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorldComponent = React.createClass({
    render: function(){
        return (
            <h1>Hello, World!</h1>
        );
    }
});

ReactDOM.render(
    <HelloWorldComponent />,
    document.getElementById('app')
);
