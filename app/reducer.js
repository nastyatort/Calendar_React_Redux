import {combineReducers} from "redux";

let events = [
    {id: '1652019-0', text: 'asd0'},
    {id: '1862019-0', text: 'asdqqqq'},
    {id: '1852019-1', text: 'asd'}
  ]

  let eventReducer = function (currentState, action){
    currentState = currentState || {
        items : events
    };
  
    switch(action.type){
      case "ADD_EVENT":
        return {
          items: [...currentState.items, action.event]
        };
        case "DELETE_EVENT":
          return{
            items: currentState.items.filter(c => c.id != action.id)
          };
    }
    return currentState;
   }






   let modal = false;

   let modalReducer = function (currentState, action){
    currentState = currentState || {
        openModal: modal,
        openModalId: action.modalId,
        eventId: action.eventId
    };

    console.log('event id = ' + action.eventId)

    switch(action.type){
              case "OPEN_MODAL":                
                  return{
                    openModal: action.isOpen,
                    openModalId: action.modalId,
                    eventId: action.eventId
                };        
    }
    return currentState;
  }



  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();//текущий месяц
  let day = today.getDate();
  let currentMonth = month;//текущий листаем -+
  let date = new Date(year, currentMonth);//листаем дату

  let calendarDatesArr = 
    {today: today, year: year, month: month, day: day, currentMonth: currentMonth, date: date}

    
    function nextMonth(nextMonth){
      let calendarDatesArr = 
    {today: today, year: year, month: month, day: day, currentMonth: nextMonth, date: new Date(year, nextMonth)}
      
    console.log('current month = ' + calendarDatesArr.currentMonth);
    console.log('month = ' + calendarDatesArr.month);
    console.log('date month = ' + calendarDatesArr.date.getMonth());

    currentMonth = calendarDatesArr.currentMonth;
    month = calendarDatesArr.month;
    date = calendarDatesArr.date;

    return(
        calendarDatesArr
      )
    }


    function calendarAction(){
      let calendarDatesArr = 
      {today: today, year: year, month: month, day: day, currentMonth: currentMonth, date: new Date(year, currentMonth)}
      
      console.log('current month = ' + calendarDatesArr.currentMonth);
      console.log('month = ' + calendarDatesArr.month);
      console.log('date month = ' + calendarDatesArr.date.getMonth());

      return(
          calendarDatesArr
        )
    }

   let calendarReducer = function(currentState, action){
     currentState = currentState || {
      calendarDates: calendarDatesArr
     }

     switch(action.type){
      case "TODAY":
          return{
            calendarDates: nextMonth(action.todayMonth)
          };
          case "PREV_MONTH":
              return{
                calendarDates: nextMonth(action.prevMonth)
              };
              case "NEXT_MONTH":
                  return{
                    calendarDates: nextMonth(action.month)
                  };
                  case "DELETE_EVENT":
                    return{
                    calendarDates: calendarAction()
                  };
                  case "OPEN_MODAL":
                      return{
                      calendarDates: calendarAction()
                    };
                    case "ADD_EVENT":
                      return{
                      //calendarDates: calendarAction()
                    };
  }
     return currentState;
}


   let reducer = combineReducers({
    eventState: eventReducer,
    modalState: modalReducer,
    calendarState: calendarReducer
  });
  
   export default reducer;