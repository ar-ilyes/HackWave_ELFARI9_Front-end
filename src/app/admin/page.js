"use client";
import avatar from "../assets/avatar.png";
import vector1 from "../assets/Vector-1.png"
import vector2 from "../assets/Vector-2.png"
import vector3 from "../assets/Vector.png"
import grade from "../assets/grade.png";
import attendance from "../assets/attendance.png";
import schedule from "../assets/schedule.png";

import Image from "next/image";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";


export default function ParentsManage() {
  const teachers = [
    {
      firstname: "bachir",
      familyname: "ismail",
      email: "bachir@gmail.com",
      numberOfChildren: 2,
      children: "arabetilyes@gmail.com , chamilnadir@gmail.com",
    },
    {
      firstname: "islam",
      familyname: "hafed",
      email: "smail@gmail.com",
      numberOfChildren: 1,
      children: "arabetilyes@gmail.com",
    },
    {
      firstname: "kasmi",
      familyname: "ayyoub",
      email: "arabetilyes@gmail.com",
      numberOfChildren: 1,
      children: "chamilnadir@gmail.com",
    },
  ];
  return (
    <main className="w-full h-full backgroundColor">
      <div className="absolute w-12 h-12 rounded-full blueColor right-10 top-7">
        <svg
          className="m-auto mt-3"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <path
            fill="white"
            d="M4 8a6 6 0 0 1 4.03-5.67a2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2V8zm8 10a2 2 0 1 1-4 0h4z"
          />
        </svg>
      </div>
      <div className="flex flex-row w-screen h-screen ">
        <div className="flex flex-col items-center justify-center space-y-10 basis-1/5 blueColor">
          {/* <Image src={logo}></Image> */}
          <div className="flex flex-col items-center justify-center">
            <Image src={avatar} className="rounded-full"></Image>
            <p className="font-semibold text-white ">Bouacha Chamil</p>
            <p className=" text-slate-400">lc_bouacha@esi.dz</p>
          </div>
          <Link
            href="#"
            className="flex flex-row items-center w-full h-10 space-x-3 text-white rounded-lg hover:bg-white hover:text-blue-900 pl-14"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M13 9V3h8v6h-8ZM3 13V3h8v10H3Zm10 8V11h8v10h-8ZM3 21v-6h8v6H3Z"
              />
            </svg>
            <p>Dashboard</p>
          </Link>
          <Link
            href="#"
            className="flex flex-row items-center w-full h-10 space-x-3 text-white rounded-lg hover:bg-white hover:text-blue-900 pl-14"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm-6.5 3a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5ZM21 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm-9 .5a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5Zm-7 5c0-.693.1-1.362.288-1.994l-.17.014A3.5 3.5 0 0 0 2 17.5V22h3v-6Zm17 6v-4.5a3.5 3.5 0 0 0-3.288-3.494c.187.632.288 1.301.288 1.994v6h3Z"
              />
            </svg>
            <p>Teachers</p>
          </Link>

          <Link
            href="#"
            className="flex flex-row items-center w-full h-10 space-x-3 text-white rounded-lg hover:bg-white hover:text-blue-900 pl-14"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm-6.5 3a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5ZM21 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm-9 .5a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5Zm-7 5c0-.693.1-1.362.288-1.994l-.17.014A3.5 3.5 0 0 0 2 17.5V22h3v-6Zm17 6v-4.5a3.5 3.5 0 0 0-3.288-3.494c.187.632.288 1.301.288 1.994v6h3Z"
              />
            </svg>
            <p>Students</p>
          </Link>

          <Link
            href="#"
            className="flex flex-row items-center w-full h-10 space-x-3 text-white rounded-lg hover:bg-white hover:text-blue-900 pl-14"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm-6.5 3a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5ZM21 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm-9 .5a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5Zm-7 5c0-.693.1-1.362.288-1.994l-.17.014A3.5 3.5 0 0 0 2 17.5V22h3v-6Zm17 6v-4.5a3.5 3.5 0 0 0-3.288-3.494c.187.632.288 1.301.288 1.994v6h3Z"
              />
            </svg>
            <p>Parents</p>
          </Link>

          <Link
            href="#"
            className="flex flex-row items-center w-full h-10 space-x-3 text-white rounded-lg hover:bg-white hover:text-blue-900 pl-14"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm-6.5 3a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5ZM21 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm-9 .5a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5Zm-7 5c0-.693.1-1.362.288-1.994l-.17.014A3.5 3.5 0 0 0 2 17.5V22h3v-6Zm17 6v-4.5a3.5 3.5 0 0 0-3.288-3.494c.187.632.288 1.301.288 1.994v6h3Z"
              />
            </svg>
            <p>Events</p>
          </Link>

          <Link
            href="#"
            className="flex flex-row items-center w-full h-10 space-x-3 text-white rounded-lg hover:bg-white hover:text-blue-900 pl-14"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm-6.5 3a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5ZM21 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm-9 .5a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5Zm-7 5c0-.693.1-1.362.288-1.994l-.17.014A3.5 3.5 0 0 0 2 17.5V22h3v-6Zm17 6v-4.5a3.5 3.5 0 0 0-3.288-3.494c.187.632.288 1.301.288 1.994v6h3Z"
              />
            </svg>
            <p>Sessions</p>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 m-11">
            <div className="flex items-start gap-5 justify-normal ">
                <div className="flex flex-row items-start justify-center py-5 space-x-5 bg-white shadow-lg px-14" rounded-md>
                <div className="items-start justify-start h-full ">
                    <h1 className="text-xl font-black blueTextColor">500</h1>
                    <h1 className="flex items-center justify-center text-xs blueTextColor ">
                    Student
                    </h1>
                </div>
                <div>
                    <Image src={vector3} alt="" className="w-6"/>
                </div>
            </div>
            <div className="flex flex-row items-start justify-center py-5 space-x-5 bg-white shadow-lg px-14" rounded-md>
                <div className="items-start justify-start h-full ">
                    <h1 className="text-xl font-black blueTextColor">15</h1>
                    <h1 className="flex items-center justify-center text-xs blueTextColor ">
                    Group
                    </h1>
                </div>
                <div>
                    <Image src={vector1} alt="" className="w-6"/>
                </div>
            </div>
            <div className="flex flex-row items-start justify-center py-5 space-x-5 bg-white shadow-lg px-14" rounded-md>
                <div className="items-start justify-start h-full ">
                    <h1 className="text-xl font-black blueTextColor">100</h1>
                    <h1 className="flex items-center justify-center text-xs blueTextColor ">
                    Teacher
                    </h1>
                </div>
                <div>
                    <Image src={vector2} alt="" className="w-6"/>
                </div>
            </div>
            </div>
            <div className="flex flex-row gap-6">
                <div>
                        <Image src={attendance} alt="" className="h-96"/>
                </div>
                <div>
                        <Image src={grade} alt="" className="h-96"/>
                </div>
                <div>
                        <Image src={schedule} alt="" className="h-96"/>
                </div>
            </div>
            
        </div>
      </div>
    </main>
  );
}
