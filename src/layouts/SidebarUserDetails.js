import React from "react"
import logo from "../images/logo.svg"
import bell from "../images/notification.svg"
import user from "../images/userimage.svg"
import more from "../images/more.svg"
import hamburger from "../images/hamburger.svg"
const SidebarUserDetails = ({ toggleClick, show }) => {
  return (
    <div className="mb-[24px]">
      <div className="logos flex justify-between items-center">
        <img
          onClick={toggleClick}
          src={hamburger}
          alt="Fabits Logo"
          className="w-[24] lg:hidden"
        />
        <img src={logo} alt="Fabits Logo" className="w-[120px]" />
        <img src={bell} alt="notification" className="w-[24px] h-[24px]" />
      </div>

      {show && (
        <div className="user flex items-center justify-around bg-[#E7EDFC] rounded-2xl h-[72px] mt-[48px]">
          <img src={user} alt="notification" className="w-[48px] h-[48px]" />
          <div className="txt">
            <h1 className="text-[16px] font-semibold">Dhruv S.</h1>
            <p className="text-[14px]">dhruv@fabits.com</p>
          </div>
          <img src={more} alt="notification" className="w-[24px] h-[24px]" />
        </div>
      )}
    </div>
  )
}

export default SidebarUserDetails
