
const usestyles = () => {
  const defaultSyle = {
    color: "#3B4D80",
    backgroundColor: "#A8B1CB",
    completedColor: "#3B4D80",
  }
  const styles = {
    color: "#74A766",
    backgroundColor: "#C5DEBD",
    completedColor: "#5B8350",
  }
  const excellentStyle = {
    color: "#5B8350",
    backgroundColor: "#C5DEBD",
    completedColor: "#5B8350",
  }
  const weakStyle = {
    color: "#D99E16",
    backgroundColor: "#F7DA95",
    completedColor: "#D99E16",
  }
  const redStyle = {
    color: "#E85D5D",
    backgroundColor: "#FFB9B9",
    completedColor: "#E85D5D",
  }
  return { defaultSyle, styles, excellentStyle, weakStyle, redStyle }
}

export default usestyles
