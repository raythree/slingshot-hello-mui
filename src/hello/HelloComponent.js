import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardHeader, CardText } from 'material-ui/Card';

import HelloForm from './HelloForm';

function onSubmitNameForm(props, values) {  
  console.log('submited:', values.firstName, values.lastName );
  props.setName(values.firstName + ' ' + values.lastName);
}

export default (props) => {
  let message = props.hello.pending ? 'Please wait...' : props.hello.message;
  const buttonStyle = { marginRight: '1em', marginBottom:'1em' };

  return (
    <Paper style={{padding:'1em'}}>
      <div>
        <h1>Hello App</h1>

        <RaisedButton primary={true} style={buttonStyle}
            disabled={props.hello.pending}
            onClick={props.sayHello.bind(null, props.hello.message)}>
            Say Hello
        </RaisedButton>

        <RaisedButton secondary={true} style={buttonStyle}
            disabled={props.hello.pending}
            onClick={props.sayHelloAsync.bind(null, props.hello.message)}>
            Say Hello Async
        </RaisedButton>
      </div>

      <div>
        {message}
      </div>

      <Card style={{marginTop: '1em'}}>
        <CardHeader
          title="Name Input"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          <HelloForm onSubmit={onSubmitNameForm.bind(null, props)}/>
        </CardText>
      </Card>

    </Paper>
  );
};


