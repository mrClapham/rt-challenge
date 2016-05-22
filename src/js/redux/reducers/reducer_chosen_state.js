/**
 * Created by grahamcapham on 22/05/2016.
 */
var Consts = require('../action/Constants');


module.exports = (state=true, action = null)=> {
   // console.log("REDUCER -- CHOSEN STATE ",action.payload);

    switch (action.type) {
        case Consts.STATUS_CHANGED :
            return action.payload;
            break;
        default :
            return state;
    }
}