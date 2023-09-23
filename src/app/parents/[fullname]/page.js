import avatar from "@/app/assets/avatar.png";
import Image from 'next/image';
import Link from 'next/link';

export default function Parent() {
    return (
    <main className="w-full h-full backgroundColor">
        <div className=' rounded-full h-12 w-12 blueColor absolute right-10 top-7'></div>
        <div className=" flex flex-row h-screen w-screen">
            <div className=' basis-1/5 blueColor flex flex-col justify-center items-center space-y-10 '>
                {/* <Image src={logo}></Image> */}
                <div className='flex flex-col justify-center items-center'>
                    <Image src={avatar} alt="avatar" className="rounded-full"></Image>
                    <p className=' text-white font-semibold'>Bouacha Chamil</p>
                    <p className=' text-slate-400'>lc_bouacha@esi.dz</p>
                </div>
                    <Link href="/parents/said/" className=' rounded-lg text-white hover:bg-white hover:text-blue-900 w-full h-10 flex flex-row pl-14 space-x-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9V3h8v6h-8ZM3 13V3h8v10H3Zm10 8V11h8v10h-8ZM3 21v-6h8v6H3Z"/></svg>
                        <p>Dashboard</p>
                    </Link>
                    <Link href="/parents/said/children" className=' rounded-lg text-white hover:bg-white hover:text-blue-900 w-full h-10 flex flex-row pl-14 space-x-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm-6.5 3a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5ZM21 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm-9 .5a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5Zm-7 5c0-.693.1-1.362.288-1.994l-.17.014A3.5 3.5 0 0 0 2 17.5V22h3v-6Zm17 6v-4.5a3.5 3.5 0 0 0-3.288-3.494c.187.632.288 1.301.288 1.994v6h3Z"/></svg>
                        <p>children</p>
                    </Link>
                    
            </div>
            <div className='basis-4/5 flex flex-col justify-center items-center space-y-6'>
            <h1 className=" underline text-3xl font-bold">Parent page </h1>
            <div className=" secondBlue py-4 rounded-lg" >
                <h1 className=" blueTextColor font-extrabold text-2xl pl-10 ">Children</h1>
                <div className=" w-4/5 px-4 py-7 flex flex-row justify-around items-center m-auto space-x-10">
                    <div className=" rounded-lg bg-white flex flex-row space-x-6 py-3 px-6 shadow-lg  ">
                        <Image src={avatar} alt="avatar"></Image>
                        <Link href="/parent/children/1"><p>child name</p></Link>
                        <p> L2 </p>
                    </div>
                    <div className=" rounded-lg bg-white flex flex-row space-x-6 py-3 px-6 shadow-lg  ">
                        <Image src={avatar} alt="avatar"></Image>
                        <Link href="/parent/children/2"><p>child name</p></Link>
                        <p> L2 </p>
                    </div>
                </div>
                <div className="width-full flex justify-center">
                <button className=" font-bold rounded-lg border-cyan-900 text-cyan-900 border-solid border py-1 px-3 relative"> <Link href="/parents/said/children"> see more </Link> </button>
                </div>
            </div>
            <div className=" secondBlue rounded-lg py-4 px-10 h-2/5 space-y-2 w-3/5" >
                <h1 className=" blueTextColor font-extrabold text-2xl pl-10 ">chatrooms</h1>
                <div className="  flex-col justify-center items-center space-y-2 overflow-y-scroll h-3/4">
                    <div className="rounded-lg bg-white flex flex-row justify-between items-center space-x-36 px-8 py-1">
                        <div className="flex flex-col space-y-1">
                            <h1 className=" blueTextColor font-bold text-lg">Report channel</h1>
                            <p className=" text-slate-400 text-xs">1 hour ago</p>
                        </div>
                        <button className=" font-bold rounded-lg border-cyan-900 text-cyan-900 border-solid border py-1 px-3 "> check </button>
                    </div>

                    <div className="rounded-lg bg-white flex flex-row justify-between items-center space-x-36 px-8 py-1">
                        <div className="flex flex-col space-y-1">
                            <h1 className=" blueTextColor font-bold text-lg">Report channel</h1>
                            <p className=" text-slate-400 text-xs">1 hour ago</p>
                        </div>
                        <button className=" font-bold rounded-lg border-cyan-900 text-cyan-900 border-solid border py-1 px-3 "> check </button>
                    </div>

                    <div className="rounded-lg bg-white flex flex-row justify-between items-center space-x-36 px-8 py-1">
                        <div className="flex flex-col space-y-1">
                            <h1 className=" blueTextColor font-bold text-lg">Report channel</h1>
                            <p className=" text-slate-400 text-xs">1 hour ago</p>
                        </div>
                        <button className=" font-bold rounded-lg border-cyan-900 text-cyan-900 border-solid border py-1 px-3 "> check </button>
                    </div>

                    

                </div>
            </div>    

            </div>
        </div>    
    </main>
    )
}
