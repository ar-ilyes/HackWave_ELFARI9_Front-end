'use client'
import avatar from "../../assets/avatar.png";
import Image from 'next/image';
import Link from 'next/link';
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function Timetable() {
    const locales = {
        "en-US": require("date-fns/locale/en-US"),
    };
    const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales,
    });
    const allEvents = [
        {
            title: "Big Meeting",
            allDay: true,
            start: new Date(2023, 9, 23),
            end: new Date(2023, 9, 23),
        },
        {
            title: "Vacation",
            start: new Date(2023, 9, 24),
            end: new Date(2023, 9, 29),
        },
        {
            title: "Conference",
            start: new Date(2023, 9, 25),
            end: new Date(2023, 9, 26),
        },
    ];
    return(<main className="w-full h-full backgroundColor">
    <div className=' rounded-full h-12 w-12 blueColor absolute right-10 top-7'></div>
    <div className=" flex flex-row h-screen w-screen">
        <div className=' basis-1/5 blueColor flex flex-col justify-center items-center space-y-10 '>
            {/* <Image src={logo}></Image> */}
            <div className='flex flex-col justify-center items-center'>
                <Image src={avatar} className="rounded-full"></Image>
                <p className=' text-white font-semibold'>Bouacha Chamil</p>
                <p className=' text-slate-400'>lc_bouacha@esi.dz</p>
            </div>
                <Link href="#" className=' rounded-lg text-white hover:bg-white hover:text-blue-900 w-full h-10 flex flex-row pl-14 space-x-3 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9V3h8v6h-8ZM3 13V3h8v10H3Zm10 8V11h8v10h-8ZM3 21v-6h8v6H3Z"/></svg>
                    <p>Dashboard</p>
                </Link>
                <Link href="#" className=' rounded-lg text-white hover:bg-white hover:text-blue-900 w-full h-10 flex flex-row pl-14 space-x-3 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm-6.5 3a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5ZM21 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm-9 .5a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5Zm-7 5c0-.693.1-1.362.288-1.994l-.17.014A3.5 3.5 0 0 0 2 17.5V22h3v-6Zm17 6v-4.5a3.5 3.5 0 0 0-3.288-3.494c.187.632.288 1.301.288 1.994v6h3Z"/></svg>
                    <p>courses</p>
                </Link>
                <Link href="#" className=' rounded-lg text-white hover:bg-white hover:text-blue-900 w-full h-10 flex flex-row pl-14 space-x-3 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14.727 6.727H14V0H4.91c-.905 0-1.637.732-1.637 1.636v20.728c0 .904.732 1.636 1.636 1.636h14.182c.904 0 1.636-.732 1.636-1.636V6.727h-6zm-.545 10.455H7.09v-1.364h7.09v1.364zm2.727-3.273H7.091v-1.364h9.818v1.364zm0-3.273H7.091V9.273h9.818v1.363zM14.727 6h6l-6-6v6z"/></svg>
                    <p>personal Docs</p>
                </Link>
        </div>
        <div className='basis-4/5 flex flex-col justify-center items-center space-y-6'>
        <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />


        </div>
    </div>    
</main>)
}