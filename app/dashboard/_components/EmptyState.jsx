import { Button } from '@/components/ui/button';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

function EmptyState() {
  return (
    <div className='flex items-center jus mt-10 flex-col'>
        <Image src={'/room.jpg'} width={200} height={200}/>
        <h2 className='fonr-medium text-lg text-gray-500'>Create New AI Interior for your room</h2>
        <Link href={'/dashboard/create-new'}>
            <Button className="mt-5">+ Redesign Room</Button>
        </Link>
    </div>
  )
}

export default EmptyState