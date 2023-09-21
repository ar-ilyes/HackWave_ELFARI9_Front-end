import Navbar from './components/Navbar';
import Image from 'next/image';
import HeroImage from "./assets/heroImage.png"; 

export default function Home() {
  return (
    <main className="w-full h-full backgroundColor">
      <Navbar/>
      <div className=' container flex flex-row items-center justify-between h-screen '>
        <div className=' h-full pl-11 flex flex-col justify-center space-y-7 blueTextColor'>
          <h1 className=' text-4xl font-extrabold '>Whether you are a <span className='yellowTextColor font-black'> Student, Teacher, or Parent</span></h1>
          <p className=' font-medium text-xl w-3/4'>Join our platform and get ready to embark on a journey of educational excellence and seamless collaboration.</p>
        </div>
        <div className=' w-full h-full  flex justify-center items-center'>
          <Image src={HeroImage} className=' w-3/4 mt-20 '></Image>
        </div>
      </div>
    </main>
  )
}
