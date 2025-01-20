import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function AdditionalReq({additionalRequirementInput}) {
  return (
    <div>
        <label className='text-gray-400'>Enter Additional Requirements (Optional)</label>
        <Textarea className="mt-2" onChange={(e)=>additionalRequirementInput(e.target.value)} />
    </div>
  )
}

export default AdditionalReq