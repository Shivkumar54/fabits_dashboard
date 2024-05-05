import React from "react"

const SidebarLists = ({ data }) => {
  const selectedStyle = {
    borderColor: "#41558D",
    border: "1px solid",
    backgroundColor: "#E7EDFC",
  }
  return (
    <div
      style={data.isSelected ? selectedStyle : null}
      className="flex gap-[12px] items-center h-[40px] pl-[16px] rounded-lg "
    >
      <img src={data.icon} alt={data?.title} className="w-[20px] h-[20px]" />
      <h1>{data.title}</h1>
    </div>
  )
}

export default SidebarLists
