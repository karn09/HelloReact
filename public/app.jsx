var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name;
    var msg = this.props.msg;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{msg}</p>
      </div>
    );
  }
});

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

var firstName = 'John';

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById("app")
);
