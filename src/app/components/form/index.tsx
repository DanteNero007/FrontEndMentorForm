

export function Form(){
  return(
    <>
    
      <form className="w-96" >
        <div className=" flex flex-col justify-center font-mono font-semibold text-sm" >

          <div className=" flex flex-col justify-center  mb-2" >
          <label className="mb-[2px] tracking-2" > CARDHOLDER NAME</label>
          <input className=" mb-3 pl-3 h-9 rounded-lg focus:outline-none focus:ring focus:ring-cyan-200" type="text" placeholder="Name"  />

          <label className="mb-[2px] tracking-2" > CARD NUMBER</label>
          <input className=" mb-3 pl-3 h-9 rounded-lg focus:outline-none focus:ring focus:ring-cyan-200" type="text" placeholder="Account Number" />
          </div>
           
          
          <div className="flex" >

          <div className="block" >
          <label className="tracking-2 mb-[2px]"> EXP.DATE (MM/YY) </label>
          
          <div className="flex gap-2 items-center justify-center mb-2" >
          <input className=" w-20 mb-3 pl-3 h-9 rounded-lg focus:outline-none focus:ring focus:ring-cyan-200"  type="number" />
           <input className=" w-20 mb-3 pl-3 h-9 rounded-lg focus:outline-none focus:ring focus:ring-cyan-200" type="number" />
          </div>  
          </div>
          
          <div className="block ml-4 w-full" >
          <label className="mb-[2px] tracking-2"> CVC </label>
          <div className="block" >
          <input className=" w-full pl-3 h-9 rounded-lg focus:outline-none focus:ring focus:ring-cyan-200" type="number" />
          </div>
          </div>
          </div>
        
        </div>
            
          <button className=" text-white font-bold rounded-lg w-full bg-rose-500 p-2 transition duration-500 hover:bg-rose-400 hover:shadow-lg hover:shadow-rose-500" >Confirm</button>
      </form>
    </>
  )
}