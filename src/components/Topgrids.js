import React from "react"
import TopgridDefault from "../layouts/TopgridDefault"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { topbardata } from "../data/topbarData"
import TopgridRenderList from "../layouts/TopgridRenderList"
import { usesettings } from "../data/slidersettings"
import { Link } from "react-router-dom"
const Topgrids = () => {
  const linkedin = "https://www.linkedin.com/in/shivkumar-m-a7a49b205/"
  const settings = usesettings
  return (
    <div className="topinner  flex-col bg-white mb-[24px] h-[310px] lg:h-[224px] lg:rounded-2xl flex lg:flex-row lg:items-center justify-center lg:pl-[32px] ">
      <TopgridDefault />
      <div className="w-full overflow-hidden">
        <Slider {...settings}>
          {topbardata.map((item) => {
            return (
              <Link key={item.id} to={linkedin} target="_blank">
                <TopgridRenderList data={item} />
              </Link>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default Topgrids
