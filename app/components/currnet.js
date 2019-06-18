import React from "react";

export default class Current extends React.Component{
    constructor(props){
        super(props);

        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
    }

    prev(){
        let month = this.props.calendar;
        let prevMonth = month.currentMonth;

        if(prevMonth == 0){
            prevMonth = 12
        }

        this.props.prev(--prevMonth);
    }

    next(){
        let month = this.props.calendar;
        let nextMonth = month.currentMonth;

        if(nextMonth == 11){
            nextMonth = -1
        }

        this.props.next(++nextMonth);
    }

  

    render(){
        return(
            <div className="current__wrapper">
                    <button onClick={this.prev}>Prev</button>
                    <div>{this.props.calendar.currentMonth}</div>
                    <button onClick={this.next}>Next</button>
            </div>
        )
    }
}