function Card({ cards }) {
    return (
        <>
            {cards && cards.map((card) => (
                <div key={card.name} className="bg-gray-100 dark:bg-gray-800 p-6 md:p-8 mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">{card.name}</h1>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{card.description}</p>
                    <h2 className="text-lg md:text-xl font-bold text-teal-600 dark:text-teal-400 mb-2">Interests</h2>
                    <ul className="list-disc pl-4">
                        {card.interests.map((interest, index) => (
                            <li key={index} className="text-gray-600 dark:text-gray-300">{interest}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    );
}

export { Card };