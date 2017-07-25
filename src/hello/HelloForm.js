import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const renderInput = ({label, input, prompt, meta: {touched, error}}) => (
  <div>
    <TextField 
      autoComplete="off"
      floatingLabelText={label} 
      hintText={prompt}
      errorText={touched && error}
      {...input}
    />
  </div>
);

const validate = values => {
  const errors = {};
  let fn = values.firstName || '';
  let ln = values.lastName || '';
  if (!fn.trim()) errors.firstName = 'Required';
  if (!ln.trim()) errors.firstName = 'Required';
  return errors;
};

let HelloForm = (props) => {
  const {handleSubmit, pristine, submitting} = props;
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <Field name="firstName" label="First Name" prompt="First Name" component={renderInput}/>
      <Field name="lastName" label="Last Name" prompt="Last Name" component={renderInput}/>

      <RaisedButton 
        disabled={pristine || submitting}
        primary={true} 
        style={{marginTop:'1em'}}
        type="submit"
      >
        Submit
      </RaisedButton>
    </form>
  );
}

HelloForm = reduxForm({
  form: 'helloForm',
  validate
})(HelloForm);

export default HelloForm;