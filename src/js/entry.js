/**
 * Created by grahamcapham on 21/04/2016.
 */

var  React           = require('react')
    ,ReactDOM        = require('react-dom')
    ,App             = require('./components/App')
    ,CreateStore     = require('redux').createStore
    ,ApplyMiddleware = require('redux').applyMiddleware
    ,ReduxPromise    = require('redux-promise')
    ,Reducers        = require('./redux/reducers/index');

import { Provider } from 'react-redux';

require ("./../sass/entry.scss");


const createStoreWithMiddleware = ApplyMiddleware(ReduxPromise)(CreateStore);
const store = createStoreWithMiddleware(Reducers);

ReactDOM.render( <Provider store={store}><App/></Provider>, document.getElementById('content') );

