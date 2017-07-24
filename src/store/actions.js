import actionBinder from 'redux-action-binder';

import * as hello from '../hello/hello';
// import all other ducks here

const getBoundActions = actionBinder.getBoundActions;

// this is only used in tests to reset action binder cache in before each hooks
const resetActionBinder = () => {
  actionBinder.reset();
  actionBinder.config({useAnnotations: true});
  actionBinder.bindActions({
    // add other actions here
    hello
  });
};
resetActionBinder();

export { getBoundActions, resetActionBinder };
