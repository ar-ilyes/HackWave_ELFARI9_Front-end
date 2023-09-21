import Image from 'next/image'
import logo from '../assets/logo.png';
const Navbar =()=>{
    return (<div className='w-full blueColor flex flex-row items-center justify-between'>
    <Image src={logo} className='mx-2'></Image>
    <div className='flex justify-center items-center space-x-6 mx-4 py-2'>
    <button className='yellowTextColor text-lg border-none'>contact</button>
    <button className='yellowTextColor text-lg border-none'>help</button>
    <button className='yellowTextColor text-lg border-solid rounded-lg yellowBorderColor border-2 py-1 px-3 hover:scale-110 transition-all duration-500 hover:blueTextColor hover:yellowColor'>register</button>
    <button className='yellowTextColor text-lg border-solid rounded-lg yellowBorderColor border-2 py-1 px-3 hover:scale-110 transition-all duration-500  hover:blueTextColor hover:yellowColor'>sign up</button>
    </div>
</div>);
}
export default Navbar;