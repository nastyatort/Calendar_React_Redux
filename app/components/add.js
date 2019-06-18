import React from "react";

import {default as ModalWindow} from './dialogs/addEvent.js'

export default class Add extends React.Component{
    constructor(props){
        super(props);
        this.id = this.props.calendar.day + '' + this.props.calendar.currentMonth + '' + this.props.calendar.year + '-' + this.counter;
    }

    render(){

        return(
            <div id={this.props.id}>
            <ModalWindow 
              events={this.props.events}
               addEvent={this.props.addEvent}
               modalVariable={this.props.modalVariable}
               openModal={this.props.openModal}
               modalId={this.props.modalId}
               eventId={this.props.eventId}
               calendar={this.props.calendar}
               id={this.props.id}
              />
            </div>
        )
    }
}