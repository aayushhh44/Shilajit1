import React from 'react'

const Certificates = () => {
  return (
    <div className='p-12'>
        <h1 className='text-2xl md:text-3xl font-poppins mb-4'>Our Certificates</h1>
      <div className='flex gap-4 w-full'>
        <img className='w-1/2 border-4 rounded-md border-red-800' src="/assets/gmpcerti.png" alt="Gmp Certificate" />
        <img className='w-1/2 border-4 rounded-md border-red-800' src="/assets/haccp.jpg" alt="haccp" />
      </div>

      <div className='flex gap-4 w-full mt-4'>
      <img className='w-1/2 border-4 rounded-md border-red-800' src="/assets/kosher.jpg" alt="Kosher" />
        <img className='w-1/2 border-4 rounded-md border-red-800' src="/assets/halal.jpg" alt="Halal" />
      </div>
    </div>
  )
}

export default Certificates
