/**
 * Created by grahamcapham on 22/05/2016.
 */

var React = require('react');

var Card = React.createClass({
    getInitialState:function(){
        return {showInfoPanel:true, opacity: .2}
    },

    getDefaultProps:function(){
        return {
            level:1,
            onSelectedMethod: ()=>{
                console.log("no method set");
            },
            data:{
                name:"Default Name",
                image:"images/person.png",
                status: "pending"
            }
        };
    },
    componentWillMount:function(){
        console.log("Mounted");
    },
    componentDidMount:function(){
        this.refs.card.addEventListener('dragstart', this.onDragStart, false);
        this.refs.card.addEventListener('dragend', this.onDragEnd, false);
    },
    componentWillUnmount:function(){

    },
    //-- Drag function
    onDragStart: function onDragStart(e){
        console.log("onDragStart ");
        this.props.onSelectedMethod(this.props.data);
        var currentDragger = e.target;
    },

    onDragEnd: function onDragEnd(e){
        console.log("onDragEnd ", this.props.onSelectedMethod);
        this.props.onSelectedMethod.call(this, this.props.data);
        var currentDragger = e.target;
    },
    getStyle: function(){
        return({top: 2*this.props.level,
            left: 2*this.props.level
        })
    },

    render:function(){

        return (
            <div className="card" draggable="true" ref="card" style={this.getStyle()}>
                <img src={this.props.data.image} draggable="false"/>
                <p>level {this.props.level}</p>
                <h1>{this.props.data.name}</h1>
            </div>
        )
    }
});

module.exports = Card;