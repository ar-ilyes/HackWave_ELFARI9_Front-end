import avatar from "@/app/assets/avatar.png";
import Image from 'next/image';
import Link from 'next/link';

export default function Teacher() {
    let scheduleData = [{
        salle:"salle 20",
        module:"maths",
        date:"22/09/2023",
    },{
        salle:"salle 10",
        module:"Statistics",
        date:"22/09/2023",
    },{
        salle:"salle 03",
        module:"database",
        date:"22/09/2023",
    }]
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
                    <Link href="/teachers/amine/" className=' rounded-lg text-white hover:bg-white hover:text-blue-900 w-full h-10 flex flex-row pl-14 space-x-3 items-center'>
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
            <h1 className=" underline text-3xl font-bold">Teacher overview </h1>
            <div className="flex flex-row justify-center w-11/12 space-x-2">

                <div className="flex flex-col w-5/12 space-y-3">
                <div className=" bg-white flex flex-col justify-center items-center  rounded-lg ">
                    <h1 className="blueTextColor font-extrabold text-2xl " >Ressources</h1>
                    <div className=" w-full px-4 py-2 overflow-y-scroll h-2/3 space-y-2">
                        <div className="border-cyan-900 border-solid border  bg-white flex flex-rom justify-between space-x-10 px-4 py-1 rounded-lg items-center">
                            <h1>Web Dev</h1>
                            <button className="font-bold rounded-lg border-cyan-900 text-cyan-900 border-solid border py-1 px-3 m-auto" > view </button>
                        </div>
                        <div className="border-cyan-900 border-solid border bg-white flex flex-rom justify-between space-x-10 px-4 py-1 rounded-lg items-center">
                            <h1>Web Dev</h1>
                            <button className="font-bold rounded-lg border-cyan-900 text-cyan-900 border-solid border py-1 px-3 m-auto" > view </button>
                        </div>
                        <div className="border-cyan-900 border-solid border bg-white flex flex-rom justify-between space-x-10 px-4 py-1 rounded-lg items-center">
                            <h1>Web Dev</h1>
                            <button className="font-bold rounded-lg border-cyan-900 text-cyan-900 border-solid border py-1 px-3 m-auto" > view </button>
                        </div>

                    </div>
                    <button className=" font-bold rounded-lg border-cyan-900 text-cyan-900 border-solid border py-1 px-3 m-auto"> see more </button>
                </div>

                <div className=" bg-white flex flex-col justify-center items-center rounded-lg ">
                    <h1 className="blueTextColor font-extrabold text-2xl " >Chatrooms</h1>
                    <div className=" w-full px-4 py-2 overflow-y-scroll h-2/3 space-y-2">
                        <div className="border-cyan-900 border-solid border bg-white flex flex-rom justify-between space-x-10 px-4 py-1 rounded-lg items-center">
                            <h1>Web Dev</h1>
                            <button className="font-bold rounded-lg border-cyan-900 text-cyan-900 border-solid border py-1 px-3 m-auto" > join </button>
                        </div>
                        <div className="border-cyan-900 border-solid border bg-white flex flex-rom justify-between space-x-10 px-4 py-1 rounded-lg items-center">
                            <h1>Web Dev</h1>
                            <button className="font-bold rounded-lg border-cyan-900 text-cyan-900 border-solid border py-1 px-3 m-auto" > join </button>
                        </div>
                        <div className="border-cyan-900 border-solid border bg-white flex flex-rom justify-between space-x-10 px-4 py-1 rounded-lg items-center">
                            <h1>Web Dev</h1>
                            <button className="font-bold rounded-lg border-cyan-900 text-cyan-900 border-solid border py-1 px-3 m-auto" > join </button>
                        </div>

                    </div>
                    <button className=" font-bold rounded-lg border-cyan-900 text-cyan-900 border-solid border py-1 px-3 m-auto"> see more </button>
                </div>
                </div>

                <div className=" w-5/12 rounded-lg shadow-lg px-5 py-2 bg-white">
                    <h1 className="blueTextColor font-extrabold text-2xl ">Schedule</h1>
                    <div className="flex flex-col space-y-4 overflow-y-scroll h-5/6 mt-4">
                        {/* <div className=" w-11/12 rounded-lg shadow-sm"> */}
                        {scheduleData.map((item)=>{
                            return(
                                <div className='border-cyan-900 border-solid border px-4 py-2 w-11/12 rounded-lg shadow-sm flex flex-row justify-between items-center space-x-10'>
                                    <p className=' text-slate-600 font-bold '>{item.module}</p>
                                    <div className=' flex flex-row justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C7.589 2 4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12c0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4z"/></svg>
                                        <p className=' text-slate-600 whitespace-nowrap text-xs'>{item.salle}</p>
                                    </div>
                                    <div className=' flex flex-row justify-center'>
                                        <p className=' text-slate-600 block text-xs'>{item.date}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="currentColor"><path d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013V2.5Z"/><path fill-rule="evenodd" d="M2 12c0-.839 0-1.585.013-2.25h19.974C22 10.415 22 11.161 22 12v2c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-2Zm15 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-4-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-6-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z" clip-rule="evenodd"/></g></svg>
                                    </div>
                                </div>
                            )
                        })}
                        {/* </div> */}
                    </div>
                    <button className=" font-bold text-white blueColor py-1 px-4 rounded-lg shadow-sm"><a href="/teachers/sessions">Details</a></button>
                </div>

            </div>


            

            </div>
        </div>    
    </main>
    )
}
