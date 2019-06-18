import React from "react";

export default class Today extends React.Component{
    constructor(props){
        super(props);
 
        this.onToday = this.onToday.bind(this);
    }

    onToday(){
        let month = this.props.calendar.month;
        this.props.onToday(month);
    }

    render(){
        return(
            <div className="today__wrapper">
                <button onClick={this.onToday}>Today</button>
            </div>
        )
    }
}