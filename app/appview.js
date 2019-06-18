import React from "react";
import {connect} from "react-redux";

import {default as actions} from "./actions.js";
import {default as Board} from "../app/components/board.js";
import {default as Today} from "../app/components/today.js";
import {default as Current} from "../app/components/currnet.js"



class AppView extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        console.log('event id appview = ' + this.props.eventId)
        return(
            <div className="app__wrapper">
                <div className="header__wrapper">
                    <Today
                    onToday={this.props.onToday}
                    events={this.props.events}
                    calendar={this.props.calendar}
                    />
                    <Current
                    next={this.props.next}
                    prev={this.props.prev}
                    calendar={this.props.calendar}
                    />
                </div>
                <Board
                events={this.props.events}
                deleteEvent={this.props.deleteEvent}
                addEvent={this.props.addEvent}
                modalVariable={this.props.modal}
                openModal={this.props.openModal}
                modalId={this.props.modal1}

                modalShow={this.props.modalShow}

                eventId={this.props.eventId}

                calendar={this.props.calendar}
                />
            </div>
        )
    }
}
 
function mapStateToProps(store) {

  return {
    events: store.eventState.items,
    modal: store.modalState.openModal,
    modal1: store.modalState.openModalId,
    eventId: store.modalState.eventId,
    calendar: store.calendarState.calendarDates
  };
}

export default connect(mapStateToProps, actions)(AppView);