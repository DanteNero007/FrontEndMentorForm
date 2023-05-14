import { Form } from "./components/form"
import { Card } from "./components/card"
import { DanLetter } from "./components/DanLetter"
 
export default function Home() {
  const multis = [0,1,2,3,4,5,6,7,8,9,10,
    0,1,2,3,4,5,6,7,8,9,10,
    0,1,2,3,4,5,6,7,8,9,10,
    0,1,2,3,4,5,6,7,8,9,10,
    0,1,2,3,4,5,6,7,8,9,10,
    0,1,2,3,4,5,6,7,8,9,10,
    0,1,2,3,4,5,6,7,8,9,10,
    0,1,2,3,4,5,6,7,8,9,10,
    0,1,2,3,4,5,6,7,8,9,10,
    0,1,2,3,4,5,6,7,8,9,10,
    0,1,2,3,4,5,6,7,8,9,10
  ]

  return (
    
    <div className=' block bg-black lg:bg-white  lg:flex  items-center h-screen w-screen'>

    <div className=" bg-black w-[450px] h-screen overflow-hidden" >
    <div className=" h-full w-full ">
      
      {multis.map((multi) =>{
        return(
          <>
          <div key={multi} className="text-2xl tracking-widest" >
          <DanLetter  /><DanLetter /><DanLetter /> <br />
          </div>
          
          </>
        )
      })}
      
    </div>
    </div>

    <Card/>
    
    <div className="left-64 top-96 absolute rounded-lg transition duration-500 grayscale hover:grayscale-0 shadow-lg hover:shadow-blue-950 bg-[#dddddd] w-96 h-52">
      <div className="h-full w-full rounded-lg flex flex-col items-center  " >
        <div className="w-full h-10 bg-blue-950 mt-5" ></div>
        <div className="w-4/5 h-8 bg-gray-400 mt-5 mb-10 " ><p className=" ml-32 w-full tracking-widest text-white text-sm text-center leading-loose " >000</p></div>
        
        <span className="bg-black font-bold text-lg " > 
        <strong className='ease-out duration-500 hover:text-cyan-300'>D</strong>
    <strong className='ease-out duration-500 hover:text-cyan-300'>a</strong>
    <strong className='ease-out duration-500 hover:text-cyan-300'>n</strong>
    <strong className='ease-out duration-500 hover:text-cyan-300'>i</strong>
    <strong className='ease-out duration-500 hover:text-cyan-300'>e</strong>
    <strong className='ease-out duration-500 hover:text-cyan-300'>l</strong>
     
    <strong className='ease-out duration-500 hover:text-rose-500'>H</strong>
    <strong className='ease-out duration-500 hover:text-rose-500'>e</strong>
    <strong className='ease-out duration-500 hover:text-rose-500'>n</strong>
    <strong className='ease-out duration-500 hover:text-rose-500'>r</strong>
    <strong className='ease-out duration-500 hover:text-rose-500'>i</strong>
    <strong className='ease-out duration-500 hover:text-rose-500'>q</strong>
    <strong className='ease-out duration-500 hover:text-rose-500'>u</strong>
    <strong className='ease-out duration-500 hover:text-rose-500'>e</strong>
                
        </span>
            
          
      </div>
    </div>
  
  <main className="w-full h-full flex items-start justify-center bg-[#cdcdcd] lg:items-center">
    <div className=" flex items-center bg-white-100 absolute mt-6 ">
     <Form/>
      </div>   
   </main>

    </div>
   
   
    )

}
