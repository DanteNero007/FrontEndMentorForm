import Image from 'next/image'
import DanDev from '../../../../public/DanielDev.png'

export function Card(){
  return(
    <div className="left-28 top-40 absolute rounded-lg transition duration-500 grayscale hover:grayscale-0 bg-gradient-to-br from-black from-20% to-[#cdcdcd] to-80% border-1 border-rose-600 shadow-lg shadow-rose-600 w-96 h-52">
      <div className="p-6 w-full h-full " >
        
      <div className="flex items-center space-x-5" >
      
        <div className='rounded-full  bg-rose-600 border-rose-600 border-2 shadow-lg shadow-rose-600  w-10 h-10'> 
            <Image width={40} height={40} src={DanDev} alt="Face from front-end developer" className=" rounded-full bg-cover" />
        </div>
        <div className="rounded-full border-cyan-300 border-2 border-opacity-70 w-5 h-5 shadow-lg shadow-cyan-300" ></div>
        </div>
        <div>
        <p className="text-white font-medium text-2xl tracking-widest mt-14 " >1234 5678 9101 1121</p>
            
            <div className="space-x-40">
            <span className="text-[#cdcdcd] font-light text-sm" > 
            <strong className='text-cyan-300 bg-black'>D</strong>
            aniel 
            <strong className='text-rose-500 font-bold bg-black '>H</strong>
            enrique
            </span>
            <span className="text-black font-bold text-sm" >16/27</span>
            </div>
        
        </div>
        </div>
    </div>

  )
}