/**
 * Created by grahamcapham on 22/05/2016.
 */
/**
 * Created by grahamcapham on 22/05/2016.
 */
var Consts      = require('../action/Constants')

module.exports = (state="pending", action=null)=>{

    switch (action.type) {
        case Consts.STAFF_FILTER_CHANGED :
            console.log("THE REDUCER FOR THE STAFF FILTER HAS BEEN FIRED ", action.payload);
            return action.payload;
        default :
            return state;
    }
}