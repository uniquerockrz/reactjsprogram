var React = require('react');
var ReactDOM = require('react-dom');

var HelloUserComponent = React.createClass({
    render: function(){
        return (
            <h3>Hello, {this.props.name}</h3>
        );
    }
});

ReactDOM.render(
    <HelloUserComponent name='Saurav' />,
    document.getElementById('app')
);
