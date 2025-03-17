import React from 'react'
import MagnifyingGlass from '../../assets/SearchIcon'

const SearchInput = ({
    placeholder = "Search...",
    value,
    onChange, }) => {
    return (
    <div className="flex w-full  items-center gap-5 bg-searchBg rounded-lg px-4  focus-within:ring-2 focus-within:ring-blue-500 transition">
      <MagnifyingGlass  />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className=" outline-none w-full bg-searchBg text-gray-700 placeholder-gray-400"
      />
    </div>
    )
}

export default SearchInput