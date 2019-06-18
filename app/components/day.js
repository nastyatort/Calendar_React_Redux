import React from "react";

import {default as EventList} from './eventList.js';
import {default as Add} from './add.js'

export default class Day extends React.Component{
    constructor(props){
        super(props);
        
    }

    render(){    

        return(
            <div id={this.props.id}
             className={this.props.className}>
                <p className="day">{this.props.number + 1}</p>
                    <EventList
                    events={this.props.events}
                    deleteEvent={this.props.deleteEvent}
                    id={this.props.id}


                    addEvent={this.props.addEvent}
                    modalVariable={this.props.modalVariable}
                    openModal={this.props.openModal}
                    modalId={this.props.modalId}
                    calendar={this.props.calendar}
                    />
                    <Add 
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