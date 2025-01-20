"use client"
import React, { useState } from 'react'
import ImageSelection from './_components/ImageSelection'
import RoomType from './_components/RoomType'
import DesignType from './_components/DesignType'
import AditionalReq from './_components/AdditionalReq'
import { Button } from '@/components/ui/button'

function CreateNew() {

  const [FormData,setFormData]=useState([]);
  const onHandleInputChange=(value,fieldName)=>{
    setFormData(prev=>({
      ...prev,
      [fieldName]:value
    }))

    console.log(FormData);
  }
  return (
    <div>
      <h2 className='font-bold text-4xl text-primary text-center'>Experince the Magic of AI Remodeling</h2>
      <p className='text-center text-gray-500'>Transform any room with a click, Select a space, choose a style, and watch as AI instantly reimagines your environment.</p>

      <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10'>
        {/* Image Selection */}
        <ImageSelection selectedImage={(value)=>onHandleInputChange(value, 'image')}/>
        {/* Form Input Selection */}
        <div>
          {/* Room type */}
          <RoomType selectedRoomType={(value)=>onHandleInputChange(value, 'roomType')}/>
          {/* Design type */}
          <DesignType selectedDesignType={(value)=>onHandleInputChange(value, 'designType')}/>
          {/* Additional Requirement TextArea (Optional) */}
          <AditionalReq additionalRequirementInput={(value)=>onHandleInputChange(value, 'additionalReq')} />
          {/* Button To Generate Image */}
          <Button className="w-full mt-5">Generate</Button>
          <p className='text-sm text-gray-400 mt-5'>NOTE: 1 Credit will use to rediesgn your room</p>
        </div>
      </div>

    </div>
  )
}

export default CreateNew