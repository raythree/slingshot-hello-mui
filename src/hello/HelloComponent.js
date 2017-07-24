import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardHeader, CardText } from 'material-ui/Card';

import HelloForm from './HelloForm';

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

  onSubmitName(values) {
    console.log('submitted: ' + values.firstName + " " + values.lastName);
  }

  render() {
    let message = this.props.hello.pending ? 'Please wait...' : this.props.hello.message;
    const buttonStyle = { marginRight: '1em', marginBottom:'1em' };

    return (
      <Paper style={{padding:'1em'}}>
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

        <div>
          {message}
        </div>

        <Card style={{marginTop: '1em'}}>
          <CardHeader
            title="Optional Name Input Form"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            <HelloForm onSubmit={this.onSubmitName.bind(this)}/>
          </CardText>
        </Card>

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
