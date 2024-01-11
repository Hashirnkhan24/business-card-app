import { useState } from "react"
import { Card } from "./components/Card"
import { CreateCard } from "./components/CreateCard"
import axios from 'axios'

function App() {
  const [showCreateCard, setShowCreateCard] = useState(false)
  const [showCards, setShowCards] = useState([]);

  axios.get('http://localhost:8000/cards')
  .then((res) => {
    setShowCards(res.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  function onAddCard() {
    setShowCreateCard(!showCreateCard)
  }
  return(
    <>
    <div className="max-w-full mx-auto p-4 bg-white dark:bg-gray-900 border rounded-md shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Anime Business Card</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {showCards.map((card) => (
          <div key={card._id} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-md shadow-md">
            <Card cards={[card]} />
          </div>
        ))}
      </div>

      <button
        onClick={onAddCard}
        className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
      >
        Create A Card
      </button>
        
      {showCreateCard && (
        <div className="mt-4">
          <CreateCard />
        </div>
      )}
    </div>
    </>
  )
}

export default App