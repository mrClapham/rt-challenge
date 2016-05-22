/**
 * Created by grahamcapham on 22/05/2016.
 */

var  React = require('react')
    ,Connect                = require('react-redux').connect
    ,BindActionCreators     = require('redux').bindActionCreators
    ,StaffAddedAction       = require('../redux/action/Actions').staffAdded
    ,StaffRemovedAction     = require('../redux/action/Actions').staffRemoved()
    ,StaffFilteredAction    = require('../redux/action/Actions').staffFilterChanged
    ,ActiveCardChanged      = require('../redux/action/Actions').activeCardChanged
    ,Card                   = require('../components/Card');

var App = React.createClass({
    getInitialState:function(){
        return {showInfoPanel:true, opacity: .2}
    },

    getDefaultProps:function(){
        return {
            infoText:"Staff List"
        };
    },
    componentWillMount:function(){
        console.log("Mounted");

        document.addEventListener('dragover',  this.onDocDragOver, false);
        document.addEventListener('dragleave', this.onDocDragLeave, false);
        document.addEventListener("dragenter", this.onDocDragEnter, false);
        document.addEventListener("drop",      this.onDocDrop,      false);
    },
    componentDidMount:function(){

    },
    componentWillUnmount:function(){

    },
    onDocDragOver: function onDocDragOver(){
       // console.log("1. onDocDragOver");
    },

    onDocDragLeave:function onDocDragLeave(){
       // console.log("2. onDocDragLeave");
    },
    onDocDragEnter: function onDocDragEnter(){
        //console.log("3. onDocDragEnter");
    },
    onDocDrop: function onDocDrop(){
       // console.log("4. onDocDrop");
    },
    cardSelectedMethod: function(value){
        this.props.ActiveCardChanged(value);
    },

    render:function(){

        return (
            <div>
                <h1>This is the main page: {this.props.staffFilter} </h1>
                <div className="hit-accept"></div>
                <div className="hit-reject"></div>
                <div className="card-holder">
                {this.props.staff.map( (d,i)=>{
                    return (<Card onSelectedMethod = {this.cardSelectedMethod} key={i} level={i} data={d}/>)
                }) }
                </div>
            </div>
        )
    }
});

module.exports = App;

// Anything returned from this function will end up as props on the  Container
function mapDispatchToProps(dispatch){
    //Whenever action is called the result should be passed to all our reducers
    return BindActionCreators({
            StaffAddedAction: StaffAddedAction,
            StaffRemovedAction: StaffRemovedAction,
            StaffFilteredAction: StaffFilteredAction,
            ActiveCardChanged: ActiveCardChanged
        },
        dispatch);
}

var mapStateToProps = function(state){
    return {    staff:      state.staff,
                staffFilter:  state.staffFilter
            }
};

module.exports = Connect(mapStateToProps, mapDispatchToProps)(App);

