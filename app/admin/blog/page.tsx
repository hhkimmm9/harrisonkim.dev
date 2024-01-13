import React from 'react'
import Link from 'next/link'
import Table from '@/components/Table'

const Admin = () => {
  return (
    <div className='w-full min-h-screen mt-8 bg-stone-50'>
      <div className='max-w-5xl mx-auto py-20'>
        <div className=''>
            <h1 className='text-3xl font-medium'>Manage blog</h1>
        </div>
        <div className='flex justify-end'>
          <Link href="/admin/blog/create" className='
            p-2 shadow-xl font-medium text-stone-800 hover:text-stone-800 bg-white hover:bg-stone-100
          '>Create</Link>
        </div>
        <div className='mt-8'>
            <Table />
        </div>
      </div>
    </div>
  )
}

export default Admin