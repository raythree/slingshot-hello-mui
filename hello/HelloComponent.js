import React from 'react';
import { PropTypes } from 'prop-types';
import Paper from 'material-ui/Paper'; 
import RaisedButton from 'material-ui/RaisedButton';

export default class HelloComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  sayHello() {
    this.props.sayHello("Hello World!");
  }

  sayHelloAsync() {
    this.props.sayHelloAsync("Hello World Async!");
  }

  render() {
    const buttonStyle = { marginBottom:'1em', marginRight:'1em', labelColor: 'white' };

    let message = this.props.hello.pending ? 'Please wait...' : this.props.hello.message;
    return (
      <Paper style={{padding: '1em'}}>
        <div>
          <h1>Hello App</h1>

          <RaisedButton primary={true} style={buttonStyle}
              disabled={this.props.hello.pending}
              onClick={this.sayHello.bind(this)}>
              Say Hello
          </RaisedButton>

          <RaisedButton secondary={true} style={buttonStyle}
              disabled={this.props.hello.pending}
              onClick={this.sayHelloAsync.bind(this)} className="btn btn-default">
              Say Hello Async
          </RaisedButton>

        </div>

        <div className="col-md-12">
          {message}
        </div>
      </Paper>
    );
  }
}

HelloComponent.propTypes = {
  hello: PropTypes.object,
  sayHello: PropTypes.func,
  sayHelloAsync: PropTypes.func,
  pending: PropTypes.bool,
  message: PropTypes.string
};
