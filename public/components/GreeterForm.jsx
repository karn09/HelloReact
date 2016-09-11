var React = require('react');

var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var updates = {};
    var nameRef = this.refs.name;
    var name = nameRef.value;
    var msgRef = this.refs.msg;
    var msg = msgRef.value;

    if (name.length > 0) {
      nameRef.value = '';
      updates.name = name;
    }
    if (msg.length > 0) {
      msgRef.value = '';
      updates.msg = msg;
    }
    this.props.onNewGreeting(updates);
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="Enter name."></input>
        </div>
        <div>
          <textarea ref="msg" placeholder="Enter message"></textarea>
        </div>
        <div>
          <button>Set Greeting</button>
        </div>
      </form>
    );
  }
})

module.exports = GreeterForm;
