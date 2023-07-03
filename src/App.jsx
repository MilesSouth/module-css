import Card from "./components/card/Card"
import data from "./data"
function App() {
  return (
    <>
      {data.map((item) => {
        return (
          <Card title={item.language} img={item.img} btnText={item.btnName} />
        )
      })}
    </>
  )
}

export default App
