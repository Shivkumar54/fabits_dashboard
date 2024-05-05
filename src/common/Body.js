import React, { useState } from "react"
import Sidebar from "../components/Sidebar"
import Topgrids from "../components/Topgrids"
import Maincards from "../components/Maincards"
import Toggler from "./Toggler"
import { sideData } from "../data/sidebarlistdata"
import left from "../images/left.svg"
const Body = () => {
  const [show, setShow] = useState(true)

  const selected = sideData.filter((item) => item.isSelected === true)

  const toggleClick = () => {
    setShow((prevState) => !prevState)
  }

  return (
    <div className="  lg:flex lg:gap-[2px] w-full">
      {show && (
        <div className="w-full sidebar lg:w-[296px] block p-12 pt-6 pr-8 pb-6 pl-8 border  border-[#D3DBEC] ">
          <Sidebar />
        </div>
      )}
      <Toggler show={show} toggleClick={toggleClick} />
      <div className="sidetopbar overflow-hidden lg:w-[1216px] lg:pt-[48px] lg:px-[48px] lg:pb-[24px]">
        <div className="mobiledev lg:hidden flex h-[56px] items-center">
          <img src={left} alt="left" className="w-[30px] h-[30px]" />
          <h1 className="lg:hidden font-bold text-xl">{selected[0].title}</h1>
        </div>
        <div className="topbar ">
          <Topgrids />
        </div>
        <div className="calc">
          <Maincards />
        </div>
      </div>
    </div>
  )
}

export default Body
