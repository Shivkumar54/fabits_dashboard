import React, { useEffect, useState } from "react"
import SidebarUserDetails from "../layouts/SidebarUserDetails"
import SidebarLists from "../layouts/SidebarLists"
import { sideData } from "../data/sidebarlistdata"
import useSidebarFIlterdata from "../hooks/useSidebarFIlterdata"

const Sidebar = () => {
  const defaultItem = useSidebarFIlterdata(sideData, "default")
  const finance = useSidebarFIlterdata(sideData, "finance")
  const insurance = useSidebarFIlterdata(sideData, "insurance")

  const [show, setShow] = useState(true)
  const [isVisible, setIsVisible] = useState(true)

  const toggleClick = () => {
    if (isVisible) {
      setShow((prevState) => !prevState)
    }
  }

  const detectHamburgerVisibility = () => {
    const screenWidth = window.innerWidth
    if (screenWidth <= 768) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    detectHamburgerVisibility()
    window.addEventListener("resize", detectHamburgerVisibility)
    return () => {
      window.removeEventListener("resize", detectHamburgerVisibility)
    }
  }, [])

  return (
    <div className="lg:mt-[50px] w-full">
      <SidebarUserDetails toggleClick={toggleClick} show={show} />

      {show && (
        <div className="lists h-[390px]">
          {defaultItem.map((item) => {
            return <SidebarLists key={item?.id} data={item} />
          })}
          <div className="finance my-[16px] ">
            <h1 className="uppercase my-[8px] text-[12px] text-[#6E6E6E] ">
              Finance
            </h1>
            {finance.map((item) => {
              return <SidebarLists key={item?.id} data={item} />
            })}
          </div>
          <div className="insurance">
            <h1 className="uppercase my-[8px] text-[12px] text-[#6E6E6E] ">
              insurance
            </h1>
            {insurance.map((item) => {
              return <SidebarLists key={item?.id} data={item} />
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default Sidebar
