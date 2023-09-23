'use client'
import avatar from "../../assets/avatar.png";
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

export default function StudentsManage() {
    const teachers = [{
        firstname:"ilyes",
        familyname:"arabet",
        email:"arabetilyes@gmail.com",
        major:"computer science",
        level:"L2"
    },{
        firstname:"ilyes",
        familyname:"arabet",
        email:"arabetilyes@gmail.com",
        major:"computer science",
        level:"L2"
    },{
        firstname:"ilyes",
        familyname:"arabet",
        email:"arabetilyes@gmail.com",
        major:"computer science",
        level:"L2"
    },{
        firstname:"ilyes",
        familyname:"arabet",
        email:"arabetilyes@gmail.com",
        major:"computer science",
        level:"L2"
    }];
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
                    <Link href="#" className=' rounded-lg text-white hover:bg-white hover:text-blue-900 w-full h-10 flex flex-row pl-14 space-x-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9V3h8v6h-8ZM3 13V3h8v10H3Zm10 8V11h8v10h-8ZM3 21v-6h8v6H3Z"/></svg>
                        <p>Dashboard</p>
                    </Link>
                    <Link href="#" className=' rounded-lg text-white hover:bg-white hover:text-blue-900 w-full h-10 flex flex-row pl-14 space-x-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm-6.5 3a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5ZM21 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm-9 .5a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5Zm-7 5c0-.693.1-1.362.288-1.994l-.17.014A3.5 3.5 0 0 0 2 17.5V22h3v-6Zm17 6v-4.5a3.5 3.5 0 0 0-3.288-3.494c.187.632.288 1.301.288 1.994v6h3Z"/></svg>
                        <p>Teachers</p>
                    </Link>

                    <Link href="#" className=' rounded-lg text-white hover:bg-white hover:text-blue-900 w-full h-10 flex flex-row pl-14 space-x-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm-6.5 3a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5ZM21 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm-9 .5a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5Zm-7 5c0-.693.1-1.362.288-1.994l-.17.014A3.5 3.5 0 0 0 2 17.5V22h3v-6Zm17 6v-4.5a3.5 3.5 0 0 0-3.288-3.494c.187.632.288 1.301.288 1.994v6h3Z"/></svg>
                        <p>Students</p>
                    </Link>

                    <Link href="#" className=' rounded-lg text-white hover:bg-white hover:text-blue-900 w-full h-10 flex flex-row pl-14 space-x-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm-6.5 3a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5ZM21 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm-9 .5a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5Zm-7 5c0-.693.1-1.362.288-1.994l-.17.014A3.5 3.5 0 0 0 2 17.5V22h3v-6Zm17 6v-4.5a3.5 3.5 0 0 0-3.288-3.494c.187.632.288 1.301.288 1.994v6h3Z"/></svg>
                        <p>Parents</p>
                    </Link>

                    <Link href="#" className=' rounded-lg text-white hover:bg-white hover:text-blue-900 w-full h-10 flex flex-row pl-14 space-x-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm-6.5 3a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5ZM21 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm-9 .5a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5Zm-7 5c0-.693.1-1.362.288-1.994l-.17.014A3.5 3.5 0 0 0 2 17.5V22h3v-6Zm17 6v-4.5a3.5 3.5 0 0 0-3.288-3.494c.187.632.288 1.301.288 1.994v6h3Z"/></svg>
                        <p>Events</p>
                    </Link>

                    <Link href="#" className=' rounded-lg text-white hover:bg-white hover:text-blue-900 w-full h-10 flex flex-row pl-14 space-x-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm-6.5 3a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5ZM21 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm-9 .5a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5Zm-7 5c0-.693.1-1.362.288-1.994l-.17.014A3.5 3.5 0 0 0 2 17.5V22h3v-6Zm17 6v-4.5a3.5 3.5 0 0 0-3.288-3.494c.187.632.288 1.301.288 1.994v6h3Z"/></svg>
                        <p>Sessions</p>
                    </Link>
                    
                    
            </div>
            <div className='basis-4/5 flex flex-col justify-center items-center space-y-6'>
                <h1 className=" underline text-3xl font-bold">Students</h1>
                <Popover>
                    <PopoverTrigger asChild>
                    <Button variant="outline" className=" relative left-1/3 text-white font-semibold bg-green-500 hover:text-green-500 hover:border-2 hover:border-solid hover:border-green-500">Add a new Student</Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                    <div className="grid gap-4">
                        <div className="space-y-2">
                        <h4 className="font-medium leading-none">Student</h4>
                        <p className="text-sm text-muted-foreground">
                            you can add a new Students from here
                        </p>
                        </div>
                        <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="firstname">First Name</Label>
                            <Input
                            id="firstname"
                            defaultValue=""
                            className="col-span-2 h-8"
                            />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="familyname">Family Name</Label>
                            <Input
                            id="familyname"
                            defaultValue=""
                            className="col-span-2 h-8"
                            />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="email">Email</Label>
                            <Input
                            id="email"
                            defaultValue=""
                            className="col-span-2 h-8"
                            />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="major">Major</Label>
                            <Input
                            id="major"
                            defaultValue=""
                            className="col-span-2 h-8"
                            />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="level">level</Label>
                            <Input
                            id="level"
                            defaultValue=""
                            className="col-span-2 h-8"
                            />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="group">group</Label>
                            <Input
                            id="group"
                            defaultValue=""
                            className="col-span-2 h-8"
                            />
                        </div>
                        
                        </div>
                        <Button >Save</Button>
                    </div>
                    </PopoverContent>
                </Popover>
            <Table>
                    <TableHeader>
                    <TableRow className="bg-slate-600 text-lg ">
                        <TableHead className="font-bold text-white">First name</TableHead>
                        <TableHead className="font-bold text-white">Family name</TableHead>
                        <TableHead className="font-bold text-white">Email</TableHead>
                        <TableHead className="font-bold text-white" >Major</TableHead>
                        <TableHead className="font-bold text-white" >Level</TableHead>
                        <TableHead className="font-bold text-white" >Group</TableHead>
                        <TableHead className="font-bold text-white" >Details</TableHead>
                        <TableHead className="font-bold text-white" >Delete</TableHead>

                    </TableRow>
                    </TableHeader>
                    <TableBody>
                        {teachers.map((item)=>{
                            return(
                                <TableRow>
                                    <TableCell className="font-medium ">{item.firstname}</TableCell>
                                    <TableCell>{item.familyname}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.subject}</TableCell>
                                    <TableCell>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                <Button variant="outline">Details</Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-80">
                                                <div className="grid gap-4">
                                                    <div className="space-y-2">
                                                    <h4 className="font-medium leading-none">Student</h4>
                                                    <p className="text-sm text-muted-foreground">
                                                        you can edit the Student informations here
                                                    </p>
                                                    </div>
                                                    <div className="grid gap-2">
                                                    <div className="grid grid-cols-3 items-center gap-4">
                                                        <Label htmlFor="firstname">First Name</Label>
                                                        <Input
                                                        id="firstname"
                                                        defaultValue={item.firstname}
                                                        className="col-span-2 h-8"
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-3 items-center gap-4">
                                                        <Label htmlFor="familyname">Family Name</Label>
                                                        <Input
                                                        id="familyname"
                                                        defaultValue={item.familyname}
                                                        className="col-span-2 h-8"
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-3 items-center gap-4">
                                                        <Label htmlFor="email">Email</Label>
                                                        <Input
                                                        id="email"
                                                        defaultValue={item.email}
                                                        className="col-span-2 h-8"
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-3 items-center gap-4">
                                                        <Label htmlFor="major">Major</Label>
                                                        <Input
                                                        id="major"
                                                        defaultValue={item.major}
                                                        className="col-span-2 h-8"
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-3 items-center gap-4">
                                                        <Label htmlFor="level">Level</Label>
                                                        <Input
                                                        id="level"
                                                        defaultValue="L2"
                                                        className="col-span-2 h-8"
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-3 items-center gap-4">
                                                        <Label htmlFor="group">group</Label>
                                                        <Input
                                                        id="group"
                                                        defaultValue="G1"
                                                        className="col-span-2 h-8"
                                                        />
                                                    </div>
                                                    
                                                    </div>
                                                    <Button >Save</Button>
                                                </div>
                                                </PopoverContent>
                                            </Popover>
                                        </TableCell>

                                        <TableCell>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                <Button variant="outline" className="bg-red-700 hover:text-red-700">Delete</Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-80">
                                                <div className="flex flex-col">
                                                    <h1>WARNING !</h1>
                                                    <p>this operation is irreverssible</p>
                                                    
                                                    <Button >confirm</Button>
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
