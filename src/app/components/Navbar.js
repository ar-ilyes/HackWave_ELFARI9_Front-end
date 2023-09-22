import Image from 'next/image'
import logo from '../assets/logo.png';
import Link from 'next/link';
const Navbar =()=>{
    return (<div className='w-full blueColor flex flex-row items-center justify-between absolute'>
    <Link href="/"><Image src={logo} className='mx-5'></Image></Link>
    <div className='flex justify-center items-center space-x-6 mx-4 py-2 '>
    <button className='yellowTextColor text-lg border-none hover:scale-110 transition-all duration-500'>contact</button>
    <button className='yellowTextColor text-lg border-none hover:scale-110 transition-all duration-500'>help</button>
    <button className=' text-lg border-solid rounded-lg  border-2 py-1 px-3 hover:scale-110 transition-all duration-500 switchColor'><Link href="/login">sign in</Link></button>
    </div>
</div>);
}
export default Navbar;