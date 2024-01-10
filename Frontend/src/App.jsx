import { useState } from "react"
import { Card } from "./components/Card"
import { CreateCard } from "./components/CreateCard"
import axios from 'axios'

function App() {
  const [showCreateCard, setShowCreateCard] = useState(false)
  const [showCards, setShowCards] = useState([]);

  // axios.get('http://localhost:8000/')
  // .then((res) => {
  //   setShowCards(res.data);
  // })
  // .catch(error => {
  //   console.error('Error fetching data:', error);
  // });

  function onAddCard() {
    setShowCreateCard(!showCreateCard)
  }
  return(
    <>
      <div>
        <h1>Creating a Business card</h1>
        <Card cards={showCards}/>
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