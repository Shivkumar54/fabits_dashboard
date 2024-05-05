import home from "../images/sidebaricons/home.svg"
import goal from "../images/sidebaricons/goal.svg"
import discover from "../images/sidebaricons/discover.svg"
import realestate from "../images/sidebaricons/realetate.svg"
import ipo from "../images/sidebaricons/ipo.svg"
import insurance1 from "../images/sidebaricons/insurance.svg"
import insurance2 from "../images/sidebaricons/insurance2.svg"

export const sideData = [
  {
    id: 1,
    title: "Home",
    icon: home,
    isSelected: false,
    type: "default",
  },
  {
    id: 2,
    title: "Plan a Goal",
    icon: goal,
    isSelected: true,
    type: "finance",
  },
  {
    id: 3,
    title: "Discover Top Funds",
    icon: discover,
    isSelected: false,
    type: "finance",
  },
  {
    id: 4,
    title: "My Investments",
    icon: realestate,
    isSelected: false,
    type: "finance",
  },
  {
    id: 5,
    title: "IPO",
    icon: ipo,
    isSelected: false,
    type: "finance",
  },
  {
    id: 6,
    title: "Insurance",
    icon: insurance1,
    isSelected: false,
    type: "insurance",
  },
  {
    id: 7,
    title: "Insurance",
    icon: insurance2,
    isSelected: false,
    type: "insurance",
  },
]
