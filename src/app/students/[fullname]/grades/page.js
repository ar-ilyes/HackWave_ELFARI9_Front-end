import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    } from "@/components/ui/table"

    import avatar from "../../../assets/avatar.png";
    import Image from 'next/image';
    import Link from 'next/link';
    
    export default function Grades() {
        const studentGrades=[{
            subject:"Math",
            cc:15,
            exam1:18,
            exam2:13,
        },{
            subject:"Physics",
            cc:19,
            exam1:12,
            exam2:9,
        },{
            subject:"Databases",
            cc:3,
            exam1:4,
            exam2:9,
        },{
            subject:"OS",
            cc:20,
            exam1:11,
            exam2:19,
        },{
            subject:"Web dev",
            cc:15,
            exam1:14,
            exam2:13,
        },];

        return (
            <main className="w-full h-full backgroundColor">
        <div className=' rounded-full h-12 w-12 blueColor absolute right-10 top-7'>
        <svg className='m-auto mt-3' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="white" d="M4 8a6 6 0 0 1 4.03-5.67a2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2V8zm8 10a2 2 0 1 1-4 0h4z"/></svg>
        </div>
        <div className=" flex flex-row h-screen w-screen">
            <div className=' basis-1/5 blueColor flex flex-col justify-center items-center space-y-10 '>
                {/* <Image src={logo}></Image> */}
                <div className='flex flex-col justify-center items-center'>
                    <Image src={avatar} className="rounded-full"></Image>
                    <p className=' text-white font-semibold'>Bouacha Chamil</p>
                    <p className=' text-slate-400'>lc_bouacha@esi.dz</p>
                </div>
                    <Link href="/students/chamil/" className=' rounded-lg text-white hover:bg-white hover:text-blue-900 w-full h-10 flex flex-row pl-14 space-x-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9V3h8v6h-8ZM3 13V3h8v10H3Zm10 8V11h8v10h-8ZM3 21v-6h8v6H3Z"/></svg>
                        <p>Dashboard</p>
                    </Link>
                    <Link href="/students/chamil/subjects" className=' rounded-lg text-white hover:bg-white hover:text-blue-900 w-full h-10 flex flex-row pl-14 space-x-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm-6.5 3a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5ZM21 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm-9 .5a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5Zm-7 5c0-.693.1-1.362.288-1.994l-.17.014A3.5 3.5 0 0 0 2 17.5V22h3v-6Zm17 6v-4.5a3.5 3.5 0 0 0-3.288-3.494c.187.632.288 1.301.288 1.994v6h3Z"/></svg>
                        <p>courses</p>
                    </Link>
                    <Link href="/students/chamil/documents" className=' rounded-lg text-white hover:bg-white hover:text-blue-900 w-full h-10 flex flex-row pl-14 space-x-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14.727 6.727H14V0H4.91c-.905 0-1.637.732-1.637 1.636v20.728c0 .904.732 1.636 1.636 1.636h14.182c.904 0 1.636-.732 1.636-1.636V6.727h-6zm-.545 10.455H7.09v-1.364h7.09v1.364zm2.727-3.273H7.091v-1.364h9.818v1.364zm0-3.273H7.091V9.273h9.818v1.363zM14.727 6h6l-6-6v6z"/></svg>
                        <p>personal Docs</p>
                    </Link>
                    <Link href="/students/chamil/grades" className=' rounded-lg text-white hover:bg-white hover:text-blue-900 w-full h-10 flex flex-row pl-14 space-x-3 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14.727 6.727H14V0H4.91c-.905 0-1.637.732-1.637 1.636v20.728c0 .904.732 1.636 1.636 1.636h14.182c.904 0 1.636-.732 1.636-1.636V6.727h-6zm-.545 10.455H7.09v-1.364h7.09v1.364zm2.727-3.273H7.091v-1.364h9.818v1.364zm0-3.273H7.091V9.273h9.818v1.363zM14.727 6h6l-6-6v6z"/></svg>
                            <p>Grades</p>
                        </Link>
            </div>
            <div className='basis-4/5 flex flex-col justify-center items-center space-y-6'>
            <h1 className=' blueTextColor underline font-semibold text-2xl'>Grades </h1>
            <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead>Subject</TableHead>
                        <TableHead>CC</TableHead>
                        <TableHead>Exam 1</TableHead>
                        <TableHead>Exam 2</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                        {studentGrades.map((item)=>{
                            return(
                                <TableRow>
                                    <TableCell>{item.subject}</TableCell>
                                    <TableCell>{item.cc}</TableCell>
                                    <TableCell>{item.exam1}</TableCell>
                                    <TableCell >{item.exam2}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
            </Table>
            </div>
        </div>    
    </main>
        )
    }



    