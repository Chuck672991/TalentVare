import React from 'react'
import MagnifyingGlass from '../../assets/SearchIcon'

const SearchInput = ({
    placeholder = "Search...",
    value,
    onChange, }) => {
    return (
    <div className="flex w-full  items-center gap-5 bg-searchBg ml-5 px-4  focus-within:ring-2 focus-within:ring-primary transition">
      <MagnifyingGlass  />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className=" outline-none w-full py-2  bg-searchBg text-lightGrey placeholder-lightGrey"
      />
    </div>
    )
}

export default SearchInput