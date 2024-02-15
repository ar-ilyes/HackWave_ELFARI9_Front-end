import avatar from "@/app/assets/avatar.png";
import Image from 'next/image';
import Link from 'next/link';


export default function Subject() {
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
                    <Link href="/student/" className=' rounded-lg text-white hover:bg-white hover:text-blue-900 w-full h-10 flex flex-row pl-14 space-x-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9V3h8v6h-8ZM3 13V3h8v10H3Zm10 8V11h8v10h-8ZM3 21v-6h8v6H3Z"/></svg>
                        <p>Dashboard</p>
                    </Link>
                    <Link href="/student/courses" className=' rounded-lg text-white hover:bg-white hover:text-blue-900 w-full h-10 flex flex-row pl-14 space-x-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm-6.5 3a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5ZM21 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm-9 .5a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5Zm-7 5c0-.693.1-1.362.288-1.994l-.17.014A3.5 3.5 0 0 0 2 17.5V22h3v-6Zm17 6v-4.5a3.5 3.5 0 0 0-3.288-3.494c.187.632.288 1.301.288 1.994v6h3Z"/></svg>
                        <p>courses</p>
                    </Link>
                    <Link href="/student/documents" className=' rounded-lg text-white hover:bg-white hover:text-blue-900 w-full h-10 flex flex-row pl-14 space-x-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14.727 6.727H14V0H4.91c-.905 0-1.637.732-1.637 1.636v20.728c0 .904.732 1.636 1.636 1.636h14.182c.904 0 1.636-.732 1.636-1.636V6.727h-6zm-.545 10.455H7.09v-1.364h7.09v1.364zm2.727-3.273H7.091v-1.364h9.818v1.364zm0-3.273H7.091V9.273h9.818v1.363zM14.727 6h6l-6-6v6z"/></svg>
                        <p>personal Docs</p>
                    </Link>
            </div>
            <div className='basis-4/5 flex flex-col justify-center items-center space-y-2 overflow-scroll'>
                <h1 className=" text-3xl font-extrabold blueTextColor underline">My Subjects</h1>
                {/* a list of subjects in a scrollable y div */}
                <div className=" space-y-2 overflow-y-scroll h-3/4 w-5/6 " >
                <div class=" m-auto relative gradientBg mt-6 flex w-4/6 flex-col rounded-xl  text-gray-700 shadow-md">
                    <div class="p-6">
                    <h5 class="mb-2 block underline  font-sans text-xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        web development
                    </h5>
                    </div>
                    <div class="p-6 pt-0 flex flex-row justify-end">
                    <a
                        class="!font-medium !text-blue-gray-900 !transition-colors hover:!text-pink-500"
                        href="/student/subjects/1"
                    >
                        <button
                        class="flex select-none items-center gap-2 rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-blue-500 transition-all bg-blue-500/10 hover:bg-blue-600/10 active:bg-blue-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-dark="true"
                        >
                        <Link href="/students/ilyes/subjects/1">details</Link>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            class="h-4 w-4"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        ></path>
                        </svg>
                        </button>
                    </a>

                    
                    </div>
                </div>
                <div class=" m-auto relative gradientBg mt-6 flex w-4/6 flex-col rounded-xl  text-gray-700 shadow-md">
                    <div class="p-6">
                    <h5 class="mb-2 block underline  font-sans text-xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Mathematiques
                    </h5>
                    </div>
                    <div class="p-6 pt-0 flex flex-row justify-end">
                    <a
                        class="!font-medium !text-blue-gray-900 !transition-colors hover:!text-pink-500"
                        href="/student/subjects/1"
                    >
                        <button
                        class="flex select-none items-center gap-2 rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-blue-500 transition-all bg-blue-500/10 hover:bg-blue-600/10 active:bg-blue-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-dark="true"
                        >
                        <Link href="/student/subjects/1">details</Link>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            class="h-4 w-4"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        ></path>
                        </svg>
                        </button>
                    </a>

                    
                    </div>
                </div>
                <div class=" m-auto relative gradientBg mt-6 flex w-4/6 flex-col rounded-xl  text-gray-700 shadow-md">
                    <div class="p-6">
                    <h5 class="mb-2 block underline  font-sans text-xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Statistics
                    </h5>
                    </div>
                    <div class="p-6 pt-0 flex flex-row justify-end">
                    <a
                        class="!font-medium !text-blue-gray-900 !transition-colors hover:!text-pink-500"
                        href="/student/subjects/1"
                    >
                        <button
                        class="flex select-none items-center gap-2 rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-blue-500 transition-all bg-blue-500/10 hover:bg-blue-600/10 active:bg-blue-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-dark="true"
                        >
                        <Link href="/student/subjects/1">details</Link>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            class="h-4 w-4"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        ></path>
                        </svg>
                        </button>
                    </a>

                    
                    </div>
                </div>
                <div class=" m-auto relative gradientBg mt-6 flex w-4/6 flex-col rounded-xl  text-gray-700 shadow-md">
                    <div class="p-6">
                    <h5 class="mb-2 block underline  font-sans text-xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Operating Systems
                    </h5>
                    </div>
                    <div class="p-6 pt-0 flex flex-row justify-end">
                    <a
                        class="!font-medium !text-blue-gray-900 !transition-colors hover:!text-pink-500"
                        href="/student/subjects/1"
                    >
                        <button
                        class="flex select-none items-center gap-2 rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-blue-500 transition-all bg-blue-500/10 hover:bg-blue-600/10 active:bg-blue-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-dark="true"
                        >
                        <Link href="/student/subjects/1">details</Link>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            class="h-4 w-4"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        ></path>
                        </svg>
                        </button>
                    </a>

                    
                    </div>
                </div>

                
                </div>
            </div>
        </div>    
    </main>
    )
}
