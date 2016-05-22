/**
 * Created by grahamcapham on 22/05/2016.
 */
var Consts      = require('../action/Constants')
    ,DummyData   = require("../../Model/DummyModel");

module.exports = (state=DummyData, action=null)=>{

    switch (action.type) {
        case Consts.STAFF_ADDED :
            return Object.assign({}, {data: action.payload.data});
        break;
        case Consts.STATUS_ACCEPT :
        {
            console.log("ACCEPT ",action.payload.data)
            return Object.assign({}, {data: action.payload.data});
        }
            break;
        case Consts.STATUS_REJECT :
            console.log("REJECT ",action.payload.data)
            return Object.assign({}, {data: action.payload.data});
            break;
        default :
            return state;
    }
}