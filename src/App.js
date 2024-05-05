import "./App.css"
import Body from "./common/Body"
import { BrowserRouter } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <div className="App bg-[#F4F7FE] w-full ">
        <Body />
      </div>
    </BrowserRouter>
  )
}

export default App
