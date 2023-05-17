"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from 'zod'
import {useForm, SubmitHandler} from 'react-hook-form'
import {useEffect, useState } from "react"

 


const formSchema = z.object({
  cardName: z.string().min(3,{ message: "minimum three letters"}),
  cardNumber: z.string().min(16, { message:"minimum number is sixteen" }).max(16,{message:"maximum number is sixteen "}),
  month:z.string().max(2, {message:"maximum number is 2 "} ).min(2,{message:"minimum 2 numbers"}),
  year:z.string().max(4,{message:"maximum number is 4 "}).min(4,{message:"minimum 4 numbers"}),
  CVC:z.string().max(3,{message:"maximum number is three "}).min(3,{message:"minimum 3 numbers"}),
})

export type formType = z.infer<typeof formSchema>

export function Form(){

  const [dataForm, setDataForm] = useState<formType>()
 
const { 
  watch,
  register, 
  handleSubmit, formState:{errors, isSubmitSuccessful}, 
  reset, 
  } = useForm<formType>({ resolver: zodResolver(formSchema)
 })

const cardName = watch("cardName")

useEffect(()=>{
  reset()
},[isSubmitSuccessful, reset])



const onSubmit: SubmitHandler<formType> = (data) =>{console.log(data);
setDataForm(data)
}

console.log(cardName)
 return(
    <>
     
      <form onSubmit={handleSubmit(onSubmit)} className="w-[340px] appearance-none  " >
        <div className=" flex flex-col justify-center font-mono font-semibold text-sm" >

          <div className=" flex flex-col justify-center  mb-2" >
          <label className="mb-[2px] tracking-2" > CARDHOLDER NAME</label>
          <input {...register("cardName")}  className={` mb-3 pl-3 h-9 rounded-lg outline-none focus:ring ${errors.cardName && "focus:ring-rose-500"} focus:ring-cyan-300 `} type="text" placeholder="Name"  />
          <p>{ errors.cardName?.message }</p>
         

          <label className="mb-[2px] tracking-2" > CARD NUMBER</label>
          <input {...register("cardNumber")} className={` mb-3 pl-3 h-9 rounded-lg focus:outline-none focus:ring ${errors.cardNumber && "focus:ring-rose-500"} focus:ring-cyan-200`} type="number" placeholder="Account Number" />
          <p>{ errors.cardNumber?.message }</p>
          </div>

          
        <div className="flex space-x-5 " >

          <div>
          <label className="tracking-2 mb-[2px]"> EXP.DATE(MM/YY)</label>
        <div className="flex w-full space-x-5" >
         <div className="flex space-x-5" >
          <input {...register("month")} placeholder="MM" className={` w-20 mb-3 pl-3 h-9 rounded-lg focus:outline-none focus:ring ${errors.month && "focus:ring-rose-500"} focus:ring-cyan-200`}  type="number" />         
          <p>{ errors.month?.message }</p> 
          <input {...register("year")} placeholder="YY" className={` w-20 mb-3 pl-3 h-9 rounded-lg focus:outline-none focus:ring ${ errors.year && "focus:ring-rose-500"} focus:ring-cyan-200`}  type="number" />
          <p>{ errors.year?.message }</p>
         </div>
          </div> 
          </div>
                  
          <div>
           <label className="mb-[2px] tracking-2 block"> CVC </label>
           <input {...register("CVC")} placeholder="123" className= {`w-full pl-3 h-9 rounded-lg focus:outline-none focus:ring ${errors.CVC && "focus:ring-rose-500"} focus:ring-cyan-200`} type="number" />
           <p>{ errors.CVC?.message }</p>
          </div>     
     
      </div>
               
          
          </div>
        
        
            
          <button className=" text-white font-bold rounded-lg w-full bg-rose-500 p-2 transition duration-500 hover:bg-rose-400 hover:shadow-lg hover:shadow-rose-500" >Confirm</button>
      </form>
      {dataForm}
    </>
  )
}