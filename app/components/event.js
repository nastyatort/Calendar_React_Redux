import React from "react";
import Modal from 'react-modal';

export default class Event extends React.Component{
    constructor(props){
        super(props);
 
        this.delete = this.delete.bind(this);
        this.show = this.show.bind(this);
        this.edit = this.edit.bind(this);
    }

    delete(e){
        e.stopPropagation();
        this.props.deleteEvent(this.props.eventId);
    }

    show(){
        this.props.openModal(true, this.props.id, this.props.eventId)
    }

    close(){
        this.props.openModal(false, this.props.id);
    }

    edit(e){
        e.stopPropagation();
        console.log('edit');
    }

    render(){
        if(this.props.eventId.split('-')[0] == this.props.id){

        return(
            <div
            onClick={this.show}
            className="event__wrapper"
            id={this.props.eventId}>
                <p>{this.props.value}</p>
                <button onClick={this.edit}>e</button>
                <button onClick={this.delete}>x</button>
            </div>
        )

        }else{
            return(
                null
            )
        }
    }
}