import { useState } from "react"
import { Card } from "./components/Card"
import { CreateCard } from "./components/CreateCard"

function App() {
  const [showCreateCard, setShowCreateCard] = useState(false)
  const cards = [{
    name : "Goku",
    description : "Strongest Mortal",
    interests : [
      "fighting",
      "Eating"
    ]
  }, {
    name : "Naruto",
    description : "7th Hokage",
    interests : [
      "Ramen"
    ]
  }]
  function onAddCard() {
    setShowCreateCard(!showCreateCard)
  }
  return(
    <>
      <div>
        <h1>Creating a Business card</h1>
        <Card cards={cards}/>
        <button onClick={onAddCard}>Create A Card</button>
        {
          showCreateCard && (
            <div>
              <CreateCard />
            </div>
          )
        }
      </div>
    </>
  )
}

export default App