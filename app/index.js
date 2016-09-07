var React = require('react');
var ReactDOM = require('react-dom');

var FriendsComponent = React.createClass({
    render: function(){
        console.log(this.props.names);
        var friends = this.props.names.map(function(name){
            return <li>{ name }</li>;
        });
        console.log(friends);
        return (
            <ul>
                {friends}
            </ul>
        );
    }
});

var ShowListComponent = React.createClass({
    render: function(){
        var names = [ 'Saurav', 'Sweta', 'Rahul', 'Vikash' ];
        return (
            <FriendsComponent names = {names} />
        );
    }
});

ReactDOM.render(
    <ShowListComponent />,
    document.getElementById('app')
);
