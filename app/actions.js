let next = function(month){
    return{
        type: "NEXT_MONTH",
        month: month
    }
};

let prev = function(month){
    return{
        type: "PREV_MONTH",
        prevMonth: month
    }
}

let onToday = function(month){
    return{
        type: "TODAY",
        todayMonth: month
    }
}

let addEvent = function (eventId, eventText) {
    return {
      type: "ADD_EVENT",
      event: {id: eventId, text: eventText}, 
    }
  };

  let editEvent = function (eventId, eventText) {
    return {
      type: "EDIT_EVENT",
      event: {id: eventId, text: eventText}, 
    }
  };

  let openModal = function(trigger, id, eventId){
    return{
       type: "OPEN_MODAL",
       isOpen: trigger,
       modalId: id,
       eventId: eventId
    }
}

  let deleteEvent = function (eventId) {
    return {
      type: "DELETE_EVENT",
      id: eventId
    }
  };

export default {addEvent, deleteEvent, onToday, prev, next, openModal, editEvent};