import avatar from "../../assets/avatar.png";
import Image from 'next/image';
import Link from 'next/link';

export default function tTeacherGroups() {
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
                    <Link href="/teachers/amine" className=' rounded-lg text-white hover:bg-white hover:text-blue-900 w-full h-10 flex flex-row pl-14 space-x-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9V3h8v6h-8ZM3 13V3h8v10H3Zm10 8V11h8v10h-8ZM3 21v-6h8v6H3Z"/></svg>
                        <p>Dashboard</p>
                    </Link>
                    <Link href="/teachers/groups" className=' rounded-lg text-white hover:bg-white hover:text-blue-900 w-full h-10 flex flex-row pl-14 space-x-3 items-center'>
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
            <h1 className=" underline text-3xl font-bold">Teachers Groups</h1>

            <div className=" secondBlue rounded-lg py-4 px-10 h-2/3 space-y-5 w-3/5" >
                <h1 className=" blueTextColor font-extrabold text-2xl pl-10 ">Groups</h1>
                <div className="  flex-col justify-center items-center space-y-2 overflow-y-scroll h-3/4 px-4">
                    <div className="rounded-lg bg-white flex flex-row justify-between items-center space-x-36 px-8 py-1">
                        <div className="flex flex-row space-x-5 items-center">
                            <h1 className="  font-bold text-lg w-20 blueTextColor whitespace-nowrap"><a href="/teachers/groups/1">groupe 1</a></h1>
                        </div>
                        <h1 className=" font-bold text-lg blueTextColor py-5">L2 G1</h1>
                    </div>


                    <div className="rounded-lg bg-white flex flex-row justify-between items-center space-x-36 px-8 py-1">
                        <div className="flex flex-row space-x-5 items-center">
                            <h1 className="  font-bold text-lg w-20 blueTextColor whitespace-nowrap">groupe 2</h1>
                        </div>
                        <h1 className=" font-bold text-lg blueTextColor py-5">L2 G2</h1>
                    </div>

                    <div className="rounded-lg bg-white flex flex-row justify-between items-center space-x-36 px-8 py-1">
                        <div className="flex flex-row space-x-5 items-center">
                            <h1 className="  font-bold text-lg w-20 blueTextColor whitespace-nowrap">groupe 3</h1>
                        </div>
                        <h1 className=" font-bold text-lg blueTextColor py-5">L2 G3</h1>
                    </div>
                    
                    <div className="rounded-lg bg-white flex flex-row justify-between items-center space-x-36 px-8 py-1">
                        <div className="flex flex-row space-x-5 items-center">
                            <h1 className="  font-bold text-lg w-20 blueTextColor whitespace-nowrap">groupe 4</h1>
                        </div>
                        <h1 className=" font-bold text-lg blueTextColor py-5">L2 G4</h1>
                    </div>

                </div>
            </div>    

            </div>
        </div>    
    </main>
    )
}
