import React, { useEffect, useState } from "react"
import boost from "../images/MainCards/boost.svg"
import mobileCardImg from "../images/MainCards/mobileCardImage.svg"
import spark from "../images/MainCards/spark.svg"
import usestyles from "../hooks/usestyles"

const MainbarCards = ({ data }) => {
  const { defaultSyle, styles, excellentStyle, weakStyle, redStyle } =
    usestyles()

  const [textColor, setTextColor] = useState("")
  const [bgColor, setBgColor] = useState("")
  const [selectedColor, setSelectedColor] = useState("")

  useEffect(() => {
    colorProvider()
  }, [data.goalhealth])

  const colorProvider = () => {
    if (data.goalhealth === "Good") {
      setTextColor(styles.color)
      setBgColor(styles.backgroundColor)
      setSelectedColor(styles.completedColor)
    } else if (data.goalhealth === "Excellent!") {
      setTextColor(excellentStyle.color)
      setBgColor(excellentStyle.backgroundColor)
      setSelectedColor(excellentStyle.completedColor)
    } else if (data.goalhealth === "Weak") {
      setTextColor(weakStyle.color)
      setBgColor(weakStyle.backgroundColor)
      setSelectedColor(weakStyle.completedColor)
    } else if (data.goalhealth === "Poor") {
      setTextColor(redStyle.color)
      setBgColor(redStyle.backgroundColor)
      setSelectedColor(redStyle.completedColor)
    } else {
      setTextColor(defaultSyle.color)
      setBgColor(defaultSyle.backgroundColor)
      setSelectedColor(defaultSyle.completedColor)
    }
  }

  return (
    <div className="h-[500px] w-full border-2 p-[24px] rounded-xl hover:shadow-lg transition-all">
      <div className="flex w-full gap-[16px] mb-[24px]">
        <div className="img w-[100px]">
          <div className="hidden lg:block w-[72px] rounded-lg h-[72px] bg-[#D9D9D9]"></div>
          <img src={mobileCardImg} className="lg:hidden" alt="" />
        </div>
        <h1 className="w-full font-bold text-[16px]">{data?.title}</h1>
      </div>
      <hr />

      <div className=" mb-[24px] lg:my-[24px] grid grid-cols-2 gap-4 ">
        <div className="left">
          <h1 className="text-[14px] text-[#727272] font-medium">
            Goal Progress
          </h1>
          <h1 className="text-[15px] font-semibold">{data.goalProgress}</h1>
        </div>
        <div className="right">
          <h1 className="text-[14px] text-[#727272] font-medium">
            Goal Amount
          </h1>
          <h1 className="text-[15px] font-semibold">{data.goalAmount}</h1>
        </div>
        <div className="left">
          <h1 className="text-[14px] text-[#727272] font-medium">Goal Date</h1>
          <h1 className="text-[16px] font-semibold">{data.goalDate}</h1>
        </div>
        <div className="right">
          <h1 className="text-[14px] text-[#727272] font-medium">
            Goal Health
          </h1>
          <div className="flex gap-1 bg-transparent">
            <img src={data.img} alt="" />
            <h1
              style={{ color: textColor }}
              className="text-[16px] font-semibold"
            >
              {data.goalhealth}
            </h1>
          </div>
        </div>
      </div>
      <hr className=" " />
      <div className="progressbar relative my-[24px] ">
        <div
          style={{ left: data.count }}
          className="circle absolute rounded-full bg-transparent border-8 border-white -top-3 shadow-lg  w-[30px] h-[30px] z-30"
        >
          <div
            className="cir w-[15px] h-[15px] rounded-full"
            style={{ backgroundColor: selectedColor }}
          ></div>
        </div>
        <div
          style={{ backgroundColor: bgColor }}
          className="w-full relative h-[10px] rounded-full"
        ></div>
        <div
          style={{ backgroundColor: selectedColor, width: data.count }}
          className=" absolute top-[-1px] h-[10px] rounded-l-lg"
        ></div>

        <h2 className="font-medium text-[14px] mt-[16px]">
          {data.goalProgressbar}{" "}
          <span className="font-bold" style={{ color: textColor }}>
            {data.progressMonths}
          </span>
        </h2>
      </div>
      {data.goalhealth === "Weak" && (
        <div className="boost">
          <div className=" flex bg-[#FDF7E8] items-center justify-center h-[40px] mb-[24px]">
            <img src={boost} alt="boost" />
            <h1 className="text-[12px]">Boost to reach your goal sooner!</h1>
          </div>
          <button className="w-full h-[40px] lg:border-2 rounded-md font-medium border-0 border-[#D3DBEC] bg-[#41558D] text-white lg:text-black lg:bg-transparent flex items-center justify-center">
            <img src={spark} alt="spark" className="lg:hidden" />
            <span>Boost</span>
          </button>
        </div>
      )}
    </div>
  )
}

export default MainbarCards
