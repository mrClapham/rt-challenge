/**
 * Created by grahamcapham on 22/05/2016.
 */
var CombineReducers      = require('redux').combineReducers
    ,StaffReducer        = require('./reducer_staff')
    ,StaffFilterReducer  = require('./reducer_staff_filter');

var RootReducer = CombineReducers({
    staff: StaffReducer,
    staffFilter: StaffFilterReducer
});

module.exports = RootReducer;