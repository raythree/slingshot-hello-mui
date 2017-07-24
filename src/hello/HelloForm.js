import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const firstNameInput = (props) => (
  <div>
    <TextField 
      autoComplete="off"
      floatingLabelText="Last Name" 
      hintText="First Name"
      {...props}
    />
  </div>
);

const lastNameInput = (props) => (
  <div>
    <TextField 
      autoComplete="off"
      floatingLabelText="Last Name"
      hintText="Last Name"
      {...props}
ss    />
  </div>
);

let HelloForm = (props) => (
  <form onSubmit={props.handleSubmit(props.onSubmit)}>
    <Field name="firstName" component={firstNameInput}/>
    <Field name="lastName" component={lastNameInput}/>

    <RaisedButton 
      primary={true} 
      style={{marginTop:'1em'}}
      type="submit"
    >
      Submit
    </RaisedButton>
  </form>
);

HelloForm = reduxForm({form: 'helloForm'})(HelloForm);

export default HelloForm;