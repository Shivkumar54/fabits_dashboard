import React from "react"
import defImg from "../images/topbar/default.svg"

const TopgridDefault = () => {
  return (
    <div>
      <div className="default relative px-3">
        <div className="text lg:w-[239px] mr-5 mb-2">
          <h1 className="text-[20px] font-semibold tracking-tight lg:mb-2">
            What financial goal do you want to plan today?
          </h1>
          <p>Select a goal to start planning</p>
        </div>
        <img
          className="hidden lg:block -bottom-16 z-30 absolute w-[106px] left-[77px] "
          src={defImg}
          alt="Default_Image"
        />
      </div>
    </div>
  )
}

export default TopgridDefault
