import React from 'react';
import { connect } from 'react-redux';
import objectAssign from 'object-assign';

import { getBoundActions } from '../store/actions';
import HelloComponent from './HelloComponent';

const Container = (props) => <HelloComponent {...props} />

function mapStateToProps(state) {
  return {
    hello: state.hello
  };
}
function mapDispatchToProps(dispatch) {
  return objectAssign({},
    getBoundActions(dispatch).hello()
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
