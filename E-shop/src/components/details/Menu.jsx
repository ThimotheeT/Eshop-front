import React from 'react'

const Menu = () => {
  return (
    <div>
      <div className='relative sm:left-4 left-2 space-x-4'>
        <a href="#" className='text-base sm:text-lg font-bold text-gray-600 dark:text-gray-400 
        hover:text-primary dark:hover:text-primary'>Category</a>
        <a href="#" className='text-base sm:text-lg font-bold text-gray-600 dark:text-gray-400 
        hover:text-primary dark:hover:text-primary'>Products</a>
      </div>
    </div>
  )
}

export default Menu