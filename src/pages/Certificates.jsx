import React, { useEffect } from 'react'


const Certificates = () => {


    useEffect(() => {
        const handleContextmenu = e => {
            e.preventDefault()
        }
        document.addEventListener('contextmenu', handleContextmenu)

        return function cleanup() {
            document.removeEventListener('contextmenu', handleContextmenu)
        }
}, [ ])

  return (
    <div className='p-12'>
        <h1 className='text-2xl md:text-3xl font-poppins mb-4'>Our Certificates</h1>
      <div className='flex gap-4 w-full'>
        <img onContextMenu="return false" className='w-1/2 border-4 rounded-md border-red-800' src="/assets/copyright/1.png" alt="Gmp Certificate" />
        <img className='w-1/2 border-4 rounded-md border-red-800' src="/assets/copyright/2.png" alt="haccp" />
      </div>

      <div className='flex gap-4 w-full mt-4'>
      <img className='w-1/2 border-4 rounded-md border-red-800' src="/assets/copyright/3.png" alt="Kosher" />
        <img className='w-1/2 border-4 rounded-md border-red-800' src="/assets/copyright/4.png" alt="Halal" />
      </div>
    </div>
  )
}

export default Certificates
