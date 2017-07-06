import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'react-chrome-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import App from './components/app/App';

const proxyStore =  new Store({
  portName: 'example'
});

render(
  <Provider store={proxyStore}>
    <App/>
  </Provider>,
  document.getElementById('app')
);


