import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import routes from './routes';
import configureStore from './store/configureStore';

require('es6-promise').polyfill(); // This is only needed for ie 11 (not edge)
require('./favicon.ico');
import 'typeface-roboto';
import './styles/styles.scss';

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

injectTapEventPlugin();

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>, document.getElementById('app')
);
