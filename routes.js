import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './common/components/App';
import NotFound from './common/components/NotFound';
import HelloContainer from './hello/HelloContainer';

let routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HelloContainer}/>
      <Route path="hello" component={HelloContainer}/>
      <Route path="*" component={NotFound}/>
   </Route>
);

export default routes;
