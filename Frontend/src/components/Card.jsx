import { useState } from "react";
import { EditCard } from "./EditCard";

function Card({ cards }) {
    const [editCard, setEditCard] = useState(false);
    const [cardVisible, setCardVisible] = useState(true);

    function onEditCard() {
        setEditCard(!editCard);
        setCardVisible(!cardVisible);
    }

    function deleteCard(cardId) {
        fetch('http://localhost:8000/deleteCard', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: cardId,
            })
        })
    }
    return (
        <>
            {cards && cards.map((card) => (
                <div key={card._id} className="bg-gray-100 dark:bg-gray-800 p-6 md:p-2 mb-8 flex justify-between ">
                    {cardVisible && (
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">{card.name}</h1>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">{card.description}</p>
                            <h2 className="text-lg md:text-xl font-bold text-teal-600 dark:text-teal-400 mb-2">Interests</h2>
                            <ul className="list-disc pl-4">
                                {card.interests.map((interest, index) => (
                                    <li key={index} className="text-gray-600 dark:text-gray-300">{interest}</li>
                                ))}
                            </ul>
                            <ul>
                                {card.socials.map((social) => (
                                    <button  key={social} className="mt-4 bg-teal-600 hover:bg-blue-600 text-white font-bold rounded-sm px-4 py-2">Instagram
                                    </button>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div className="flex flex-col md:flex-col items-center">
                        <div>
                            <button onClick={onEditCard} className="m-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-sm px-4 py-2">{editCard ? "Finish" : "Edit Card"}
                            </button>
                        </div>
                                    
                        {editCard && (
                            <div>
                                <EditCard id={card._id}/>
                            </div>
                        )}
                        <div>
                            <button onClick={() => deleteCard(card._id)} className="m-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-sm px-4 py-2">Delete Card
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export { Card };