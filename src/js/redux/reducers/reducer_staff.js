/**
 * Created by grahamcapham on 22/05/2016.
 */
var Consts = require('../action/Constants')
    , DummyData = require("../../Model/DummyModel");

module.exports = (state = DummyData, action = null)=> {

    switch (action.type) {
        case Consts.STAFF_ADDED :
            return Object.assign(state, {data: action.payload.data});
            break;
        case Consts.CHOICE_MADE :
            console.log(" CHOICE MADE AND PAYLOAD IS ", action.payload)
            var newState = state.filter((v)=>{return v.uuid !== action.payload.uuid});
            newState.push(action.payload);

            return newState;

            break;

        default :
            return state;
    }
}