'use client'
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!



const Calendar = (props) => {
    const listOfSessions=[
        { title: 'event 1', date: '2023-09-21',displayEventTime:true, allDay:false , time :"12pm" },
        { title: 'event 2', date: '2023-09-21',displayEventTime:true, allDay:false , time :"12pm" }
    ]
    return(
        <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridWeek"
            weekends={true}
            events={listOfSessions}
    />)
    
    }
export default Calendar;