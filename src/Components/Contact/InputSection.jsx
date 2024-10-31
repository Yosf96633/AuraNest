import React from 'react'
import { Input , Button } from 'antd'
const InputSection = () => {
  return (
   <div>

    <div className=' grid grid-cols-1 grid-rows-3 gap-8 p-6'>
           <div className=' flex space-x-4'>
             <Input className='' placeholder="Your Name"/>
             <Input className='' placeholder="Your Email"/>
             <Input className='' placeholder="Your Phone"/>
           </div>
           <div>
             <Input.TextArea placeholder="Message"/>
           </div>
           <div className=' flex justify-center'>
            <Button className=' self-end' type="primary">
              Send Message
            </Button>
           </div>
    </div>
   </div>
  )
}

export default InputSection