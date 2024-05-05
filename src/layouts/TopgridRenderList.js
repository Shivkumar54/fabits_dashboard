import React from "react"

const TopgridRenderList = ({ data }) => {
  return (
    <div className="w-[160px] lg:w-[auto] mx-1 rounded-lg h-[160px] border-2 hover:shadow-md py-4 pl-3 ">
      <img src={data.image} alt="Topbar" className="mb-1" />
      <h1 className="text-lg font-semibold">{data.title}</h1>
      <h1 className="text-sm">{data.tagline}</h1>
    </div>
  )
}

export default TopgridRenderList
