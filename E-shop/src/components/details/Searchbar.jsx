import React from 'react'

const Searchbar = () => {
  return (
    <div className="relative group hidden sm:block">
              <input type="text" placeholder="Search" className="search-bar" />
              <p className="text-xl text-gray-600 group-hover:text-primary
                dark:text-gray-400 absolute top-1/2 -translate-y-1/2
                right-3 duration-200"
              >Searchbar</p>
    </div>
  )
}

export default Searchbar