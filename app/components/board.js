import React from "react";

import {default as Day} from './day.js'

export default class Board extends React.Component{
    constructor(props){
        super(props);
 
    }

    render(){
        const{
            calendar
        } = this.props;


    let arr = [];
    let counter = 0;
    let className = 'day__wrapper';

    while(calendar.date.getMonth() == calendar.currentMonth){
        arr.push(counter++);

        calendar.date.setDate(calendar.date.getDate() + 1);

    }


    console.log('event id board = ' + this.props.eventId)

        return(
            <div className="board__wrapper">
                   {arr.map(day =>
                <Day
                events={this.props.events}
                deleteEvent={this.props.deleteEvent}
                addEvent={this.props.addEvent}
                modalVariable={this.props.modalVariable}
                openModal={this.props.openModal}
                modalId={this.props.modalId}
                eventId={this.props.eventId}
                number={day}
                calendar={this.props.calendar}
                className={className}
                key={day + '' + this.props.calendar.currentMonth + '' + this.props.calendar.year}
                id={day + '' + this.props.calendar.currentMonth + '' + this.props.calendar.year}
                />
                   )}
            </div>
        )
    }

}