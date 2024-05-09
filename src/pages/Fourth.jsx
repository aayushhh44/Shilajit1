import React from 'react'

const Fourth = () => {
  return (
    <div className='p-6 my-8'>
        <p className="text-white mb-4 font-poppins sticky top-16 p-4 w-auto text-center mx-auto bg-green-600">Nepali product, made exclusively for the people of the UK! 🇬🇧</p>
        <h1 className='text-2xl md:text-3xl font-poppins mb-4'>Why Gurkha Shilajit?</h1>

        <div className='flex flex-col md:flex-row mt-8 justify-between items-center text-lg'>
      <img className='w-96 mx-auto rounded-md' src="/assets/benefits.png" alt="Benefits Image" />
      <p className='text-justify mt-4 p-4 w-auto font-poppin text-gray-600 md:text-1xl md:w-96 mx-auto'><span className='text-black'>Discover Gurkha Shilajit </span> – your natural health boost from Nepal's mountains! Our Shilajit is pure and potent, bringing the goodness of the Himalayas to you. Feel the difference with Gurkha Shilajit – your daily dose of wellness!</p>
      </div>
    </div>
  )
}

export default Fourth
