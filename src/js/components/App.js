/**
 * Created by grahamcapham on 22/05/2016.
 */

var  React = require('react')
    ,Constants              = require('./../redux/action/Constants')
    ,Connect                = require('react-redux').connect
    ,BindActionCreators     = require('redux').bindActionCreators
    ,StaffAddedAction       = require('../redux/action/Actions').staffAdded
    ,StaffRemovedAction     = require('../redux/action/Actions').staffRemoved()
    ,StaffFilteredAction    = require('../redux/action/Actions').staffFilterChanged
    ,ActiveCardChanged      = require('../redux/action/Actions').activeCardChanged
    ,StatusChosenAction     = require('../redux/action/Actions').statusChosen
    ,CardChosenAction       = require('../redux/action/Actions').cardChosenOrRejected
    ,ChangeStatusFilter     = require('../redux/action/Actions').changeStatusFilter
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

    },
    componentDidMount:function(){
        document.addEventListener('dragover',  this.onDocDragOver, false);
    },
    componentWillUnmount:function(){
        //--
    },
    onDocDragOver: function onDocDragOver(e){
        e.preventDefault();
        e.stopPropagation();
        //console.log("4. onDocDrop", e.srcElement.classList[0])
        //

        if(e.srcElement.classList[0] === 'hit-accept'){
            if(this.props.chosenState !== true){
                this.props.StatusChosenAction(true);
            }
        }

        if(e.srcElement.classList[0] === 'hit-reject'){
            if(this.props.chosenState !== false){
                this.props.StatusChosenAction(false);
            }
        }
    },

    onDocDragLeave:function onDocDragLeave(e){
        e.preventDefault();
        e.stopPropagation();
    },
    onDocDragEnter: function onDocDragEnter(e){
        e.preventDefault();
        e.stopPropagation();
    },
    onDocDrop: function onDocDrop(e){
        e.preventDefault();
        e.stopPropagation();
    },
    // The card has been picked up
    cardSelectedMethod: function(value){
        this.props.CardChosenAction(value);
    },
    // The card has been dropped and either chosen or rejected
    cardChoiceMadeOnDrop:function(value){
        console.log("cardChoiceMadeOnDrop ", value);
        var _data = Object.assign({}, value);
        // set the status to chosen or rejected - depending on the state of the app

        console.log("this.props.chosenState ========================== ",this.props.chosenState);

        _data.status = this.props.chosenState === false ? Constants.STATUS_REJECT : Constants.STATUS_ACCEPT;
        this.props.CardChosenAction(_data);
    },
    setStatePending:function(){
        this.props.ChangeStatusFilter('pending');
    },

    setStateAccept:function(){
        this.props.ChangeStatusFilter(Constants.STATUS_ACCEPT);
    },

    setStateReject:function(){
        this.props.ChangeStatusFilter(Constants.STATUS_REJECT);
    },

    render:function(){

        return (
            <div>
                <div className="header">
                    <h1>This is the main page: {this.props.staffFilter} </h1>
                    <h1>Chosen: {this.props.chosenState ? Constants.STATUS_ACCEPT : Constants.STATUS_REJECT} </h1>
                    <button onClick={this.setStatePending}>PENDING </button>
                    <button onClick={this.setStateAccept} ref="choose">CHOSEN </button>
                    <button onClick={this.setStateReject} ref="choose">REJECTED </button>
                </div>

                <div ref="accept" className="hit-accept"></div>
                <div ref= "reject" className="hit-reject"></div>
                <div className="card-holder">
                {this.props.staff.filter((s)=>{return s.status === this.props.staffFilter})
                    .map( (d,i)=>{
                    return (<Card onChoiceMade = {this.cardChoiceMadeOnDrop}
                                  onSelectedMethod = {this.cardSelectedMethod}
                                  key={i}
                                  level={i}
                                  data={d}/>)
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
            StaffAddedAction:    StaffAddedAction,
            StaffRemovedAction:  StaffRemovedAction,
            StaffFilteredAction: StaffFilteredAction,
            ActiveCardChanged:   ActiveCardChanged,
            StatusChosenAction:  StatusChosenAction,
            CardChosenAction:    CardChosenAction,
            ChangeStatusFilter:  ChangeStatusFilter
        },
        dispatch);
}

var mapStateToProps = function(state){
    return {    staff:          state.staff,
                staffFilter:    state.staffFilter,
                chosenState:    state.chosenState
            }
};

module.exports = Connect(mapStateToProps, mapDispatchToProps)(App);

