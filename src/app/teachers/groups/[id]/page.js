'use client'
import avatar from "../../../assets/avatar.png";
import Image from 'next/image';
import Link from 'next/link';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    } from "@/components/ui/table"

    import { Button } from "@/components/ui/button"
    import { Input } from "@/components/ui/input"
    import { Label } from "@/components/ui/label"
    import {
    Popover,
    PopoverContent,
    PopoverTrigger,
    } from "@/components/ui/popover"

export default function Groupes() {
    const studentMarks = [{
        firstname:"ilyes",
        familyname:"arabet",
        cc:14,
        exam1:15,
        exam2:17,
    },{
        firstname:"ilyes",
        familyname:"arabet",
        cc:14,
        exam1:15,
        exam2:17,
    },{
        firstname:"ilyes",
        familyname:"arabet",
        cc:14,
        exam1:15,
        exam2:17,
    },{
        firstname:"ilyes",
        familyname:"arabet",
        cc:14,
        exam1:15,
        exam2:17,
    },{
        firstname:"ilyes",
        familyname:"arabet",
        cc:14,
        exam1:15,
        exam2:17,
    }];
    return (
    <main className="w-full h-full backgroundColor">
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
                        <p>Groupe</p>
                    </Link>

                    <Link href="#" className=' rounded-lg text-white hover:bg-white hover:text-blue-900 w-full h-10 flex flex-row pl-14 space-x-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm-6.5 3a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5ZM21 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm-9 .5a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5Zm-7 5c0-.693.1-1.362.288-1.994l-.17.014A3.5 3.5 0 0 0 2 17.5V22h3v-6Zm17 6v-4.5a3.5 3.5 0 0 0-3.288-3.494c.187.632.288 1.301.288 1.994v6h3Z"/></svg>
                        <p>Ressources</p>
                    </Link>

                    <Link href="#" className=' rounded-lg text-white hover:bg-white hover:text-blue-900 w-full h-10 flex flex-row pl-14 space-x-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm-6.5 3a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5ZM21 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm-9 .5a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5Zm-7 5c0-.693.1-1.362.288-1.994l-.17.014A3.5 3.5 0 0 0 2 17.5V22h3v-6Zm17 6v-4.5a3.5 3.5 0 0 0-3.288-3.494c.187.632.288 1.301.288 1.994v6h3Z"/></svg>
                        <p>chatrooms</p>
                    </Link>

                    <Link href="#" className=' rounded-lg text-white hover:bg-white hover:text-blue-900 w-full h-10 flex flex-row pl-14 space-x-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm-6.5 3a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5ZM21 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm-9 .5a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5Zm-7 5c0-.693.1-1.362.288-1.994l-.17.014A3.5 3.5 0 0 0 2 17.5V22h3v-6Zm17 6v-4.5a3.5 3.5 0 0 0-3.288-3.494c.187.632.288 1.301.288 1.994v6h3Z"/></svg>
                        <p>Docs</p>
                    </Link>
                    
                    
            </div>
            <div className='basis-4/5 flex flex-col justify-center items-center space-y-6'>
                <h1 className=" underline text-3xl font-bold">Students</h1>
            <Table>
                    <TableHeader>
                    <TableRow className="bg-slate-600 text-lg ">
                        <TableHead className="font-bold text-white">First name</TableHead>
                        <TableHead className="font-bold text-white">Family name</TableHead>
                        <TableHead className="font-bold text-white">CC</TableHead>
                        <TableHead className="font-bold text-white" >Exam 1</TableHead>
                        <TableHead className="font-bold text-white" >Exam 2</TableHead>
                        <TableHead className="font-bold text-white" >Edit</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                        {studentMarks.map((item)=>{
                            return(
                                <TableRow>
                                    <TableCell className="font-medium ">{item.firstname}</TableCell>
                                    <TableCell>{item.familyname}</TableCell>
                                    <TableCell>{item.cc}</TableCell>
                                    <TableCell>{item.exam1}</TableCell>
                                    <TableCell>{item.exam2}</TableCell>
                                    <TableCell>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                <Button variant="outline">Edit</Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-80">
                                                <div className="grid gap-4">
                                                    <div className="space-y-2">
                                                    <h4 className="font-medium leading-none">Grades</h4>
                                                    <p className="text-sm text-muted-foreground">
                                                        Change student's grades
                                                    </p>
                                                    </div>
                                                    <div className="grid gap-2">
                                                    <div className="grid grid-cols-3 items-center gap-4">
                                                        <Label htmlFor="cc">CC</Label>
                                                        <Input
                                                        id="cc"
                                                        defaultValue="00"
                                                        className="col-span-2 h-8"
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-3 items-center gap-4">
                                                        <Label htmlFor="exam1">exam 1</Label>
                                                        <Input
                                                        id="exam1"
                                                        defaultValue="00"
                                                        className="col-span-2 h-8"
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-3 items-center gap-4">
                                                        <Label htmlFor="exam2">exam 2</Label>
                                                        <Input
                                                        id="exam2"
                                                        defaultValue="00"
                                                        className="col-span-2 h-8"
                                                        />
                                                    </div>
                                                    </div>
                                                </div>
                                                </PopoverContent>
                                            </Popover>
                                        </TableCell>

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
