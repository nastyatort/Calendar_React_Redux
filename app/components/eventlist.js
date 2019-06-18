import React from "react";

import {default as Event} from './event.js'

export default class EventList extends React.Component{
    constructor(props){
        super(props);
 
    }

    

    render(){


        return(
            <div className="event__list-wrapper">
                {this.props.events.map(event =>
                    <Event 
                    eventId={event.id}
                    key={event.id}
                    value={event.text}
                    deleteEvent={this.props.deleteEvent}
                    id={this.props.id}




                    addEvent={this.props.addEvent}
                    modalVariable={this.props.modalVariable}
                    openModal={this.props.openModal}
                    modalId={this.props.modalId}
                    calendar={this.props.calendar}
                    />
                    )}
            </div>
        )
    }
}