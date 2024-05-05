import React from "react"
import toggler from "../images/toggler.svg"

const Toggler = ({ show, toggleClick }) => {
  return (
    <div>
      <div className="Toggler hidden lg:block">
        <div
          onClick={toggleClick}
          className={
            show
              ? "toggler absolute top-[96px] left-[250px] z-40"
              : " absolute left-0 top-[126px]"
          }
        >
          <img src={toggler} alt="toggler" tooltip="Toggle " />
        </div>
      </div>
    </div>
  )
}

export default Toggler
