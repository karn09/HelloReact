var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');
var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      msg: 'This is from a component!'
    }
  },
  getInitialState: function() {
    return {
      name: this.props.name,
      msg: this.props.msg
    }
  },
  handleNewGreeting: function (greetObj) {
    this.setState(greetObj);
  },
  render: function () {
    var name = this.state.name;
    var msg = this.state.msg;

    return (
      <div>
        <GreeterMessage name={name} msg={msg}/>

        <GreeterForm onNewGreeting={this.handleNewGreeting}/>
      </div>
    );
  }
});

module.exports = Greeter;
