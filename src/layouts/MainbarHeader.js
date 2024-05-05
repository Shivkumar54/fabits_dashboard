import React from "react"
import filter from "../images/MainCards/filter.svg"
import search from "../images/MainCards/search.svg"
import mobileFilter from "../images/MainCards/mobileFilter.svg"
import info from "../images/MainCards/info.svg"
const MainbarHeader = () => {
  return (
    <div>
      <div className="flex-col lg:mb-[24px] header flex p-[24px] lg:p-[0px] lg:flex-row lg:justify-between lg:items-center ">
        <h1 className="font-bold mb-[24px] lg:mb-0">Track current goals</h1>
        <div className="right lg:flex justify-evenly gap-[24px] items-center cursor-pointer">
          <div className="hidden lg:flex gap-[24px]">
            <div className="filer flex">
              <h6 className="text-[14px] m-0">Filters</h6>
              <img src={filter} alt="" className="m-0" />
            </div>
            <select className="text-[14px]">
              <option className="text-[14px]">
                Sort by: Progress (High to Low)
              </option>
            </select>
          </div>
          <div className="flex gap-[24px]">
            <div className="search flex items-center">
              <img src={search} alt="" className="ml-2 absolute z-30" />
              <input
                type="search"
                placeholder="Search"
                className=" border-2 relative w-[292px] lg:w-[246px] h-[40px] border-[#D3DBEC] outline outline-none pl-9 rounded-md"
              />
            </div>
            <img src={mobileFilter} alt="" className="lg:hidden" />
          </div>
        </div>
      </div>
      <div className="bg-[#D3DBEC] h-[40px] flex items-center justify-center lg:hidden">
        <img src={info} alt="" className="m-0 w-[24px] gap-4" />
        <h1 className="text-[12px] font-medium">
          Tap on a card to view more information
        </h1>
      </div>
    </div>
  )
}

export default MainbarHeader
