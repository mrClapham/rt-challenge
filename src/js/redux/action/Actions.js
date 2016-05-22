/**
 * Created by grahamcapham on 22/05/2016.
 */
var Types = require('./Constants');


function staffAdded(value){
    return{
        type: Types.STAFF_ADDED,
        payload: value
    }
}

function staffRemoved(value){
    return{
        type: Types.STAFF_REMOVED,
        payload: value
    }
}


function staffFilterChanged(value){
    return{
        type: Types.STAFF_FILTER_CHANGED,
        payload: value
    }
}

function activeCardChanged(value){
    console.log("activeCardChanged ", value);
    return{
        type: Types.ACTIVE_CARD_CHANGED,
        payload: value
    }
}

function statusChosen(){
    console.log("statusChosen ", value);
    return{
        type: Types.ACTIVE_CARD_CHANGED,
        payload: value
    }
}


module.exports = {
    staffAdded: staffAdded,
    staffRemoved : staffRemoved,
    staffFilterChanged : staffFilterChanged,
    activeCardChanged : activeCardChanged
};



