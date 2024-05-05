import React from "react"
import MainbarHeader from "../layouts/MainbarHeader"
import { goalsData } from "../data/goalsData"
import MainbarCards from "../layouts/MainbarCards"
import leftArr from "../images/MainCards/leftArrow.svg"
import rightArr from "../images/MainCards/rightArrow.svg"

const Maincards = () => {
  return (
    <div className="topinner bg-white mb-[24px] lg:p-[32px] h-full lg:rounded-2xl  ">
      <MainbarHeader />
      <hr />
      <div className="my-[24px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] px-[24px] lg:px-[0px] ">
          {goalsData.map((item) => {
            return <MainbarCards key={item?.id} data={item} />
          })}
        </div>
      </div>
      <div className="hidden  mt-[24px] lg:flex justify-end gap-4 items-end pagination right-0">
        <h6>
          {" "}
          <span className="text-[#727272]">showing </span> 1-4 of 4
        </h6>
        <img className="bg-[#F4F7FE] rounded-full" src={leftArr} alt="" />
        <img className="bg-[#F4F7FE] rounded-full" src={rightArr} alt="" />
      </div>
    </div>
  )
}

export default Maincards
