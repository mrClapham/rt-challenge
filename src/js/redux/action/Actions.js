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
    //console.log("activeCardChanged ", value);
    return{
        type: Types.ACTIVE_CARD_CHANGED,
        payload: value
    }
}

function statusChosen(value){
    console.log("statusChosen ", value);
    return{
        type: Types.STATUS_CHANGED,
        payload: value
    }
}

function cardChosenOrRejected(value){
    console.log("statusChosen ", value);
    return{
        type: Types.CHOICE_MADE,
        payload: value
    }
}

function changeStatusFilter(value){
    return{
        type: Types.STAFF_FILTER_CHANGED,
        payload: value
    }
}


module.exports = {
    staffAdded: staffAdded,
    staffRemoved : staffRemoved,
    staffFilterChanged : staffFilterChanged,
    activeCardChanged : activeCardChanged,
    statusChosen: statusChosen,
    cardChosenOrRejected: cardChosenOrRejected,
    changeStatusFilter: changeStatusFilter
};



