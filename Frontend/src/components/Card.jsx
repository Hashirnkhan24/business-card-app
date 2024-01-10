function Card({cards}) {
    return (
        <>
            {cards.map((card) => (
                <div key={card.name}>
                    <h1>{card.name}</h1>
                    <p>{card.description}</p>
                    <h2>Interests</h2>
                    <ul>
                        {card.interests.map((interest) => (
                            <li key={interest}>{interest}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    )
}

export { Card }