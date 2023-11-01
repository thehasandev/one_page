import React, { useState } from 'react'
import data from './components/data'



function App() {

      
  return (
    <>
    <section>
        <div className='max-w-container mx-auto'>
          <div className='grid grid-cols-2 border-b border-solid border-black pb-5  mt-5'>
          
                
                <h2 className='text-2xl text-[#11111] font-bold  '><input type="checkbox" className='mx-5'/>3 File Selected </h2>
  
           
                  <h2  className='text-xl inline text-[red] font-bold text-right'>Delete Files</h2>
               
          </div>
        </div>
    </section>

    <section className ='my-10'>
      <div className='max-w-container mx-auto'>
         <h2 className='text-2xl text-[#11111] font-bold mb-8'>Tottal Number of seleted files</h2>

           <div className="grid grid-cols-2 gap-10">
                {
                  data.map((item,index)=>{
                    if(index==0){
            return  <div key={index}>
                        <div className='relative'>
                          <img src={item.url} className='w-full h-[500px]'/>
                          <input  type="checkbox"  className='absolute top-5 left-5'/>
                        </div>
                     
                    </div>

                    }
                  }
                  
                  )
                }

              <div className='grid gap-10 grid-cols-3'>
                  {
                 
                    data.map((item,index)=>{
                      if(index !== 0 && index<7){
                        
             return    <div key={index} className='relative'>
                          <img src={item.url}/>
                          
                          <input type="checkbox"  className='absolute top-5 left-5'/>
                        </div>
                      }
                    }
                    
                    )
                  }
              </div>
           </div>


           <div className='mt-5 grid grid-cols-5 gap-10'> 
           {
            data.map((item,index)=>{
              if(index > 6){
      return  <div key={index} className='relative'>
                  <img src={item.url} />
                  <input type="checkbox"  className='absolute top-5 left-5'/>
                  
              </div>
                
              }
              
            })
           }
           </div>



     
      </div>
    </section>
    </>
  )
}

export default App