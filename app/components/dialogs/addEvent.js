import React from "react";
import Modal from 'react-modal';

export default class ModalWindow extends React.Component {
    constructor () {
      super();
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
      this.onAddEvent = this.onAddEvent.bind(this);
      this.handleValue = this.handleValue.bind(this);


      this.counter = 0

      this.value = ''
      this.isAdd = false;
    }
    
    handleOpenModal () {
        this.props.openModal(true, this.props.id);
        this.isAdd = true;
    }
    
    handleCloseModal () {
        this.props.openModal(false, this.props.id);
        this.isAdd = false;
    }

    onAddEvent(){

        let id = this.props.id + '-' + this.counter;

        if(this.value != ''){
        this.props.addEvent(id, this.value);
        this.counter++
        }
        this.value = ''
        this.props.openModal(false);
        this.isAdd = false;
    }

    handleValue(e) {
        let value = e.target.value;
            this.value = value;
    }
    
    render () {

      return (
        <div id={this.props.id} >
          <button
            onClick={this.handleOpenModal}
            className="add"
            >+</button>
            {this.props.modalVariable ? 
            <div>
              {this.props.id == this.props.modalId ?
          <Modal 
                ariaHideApp = {false}
                isOpen={this.props.modalVariable}
                contentLabel="Modal window"
                className="modal__wrapper"
          >
              <h3>
                {this.isAdd ? 'Type some text' : 'Event'}</h3>
      {this.isAdd ? 
        <textarea
              id="text"
              onChange={this.handleValue}
              ></textarea>
              : null
      }

      {this.isAdd ? null :
        <div>
      {this.props.events.map(event =>
              <div key={event.id}>
                {
                     (event.id == this.props.eventId) ?
                     <div
                     className="modal__text"
                     >{event.text}</div>
                     : null 
                     }
              </div>
        )}  
        </div>
        }
              <div className="btn__wrapper">
            <button type="button" onClick={this.handleCloseModal}>Close</button>
            {this.isAdd ? 
            <button type="button" onClick={this.onAddEvent}>Save</button>
            :null }
            </div>
          </Modal>
              : null }
          </div>
            : null }
        </div>
      );
    }
  }
  