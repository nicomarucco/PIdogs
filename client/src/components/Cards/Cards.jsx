import React from "react";

const Cards = ({cards, loading}) => {
    if (loading) {
        return <h3>Loading...</h3>
    }
     return (
        <ul>
            {cards.map(card => (
                <li key={card.id}>
                    {card.name}
                </li>
            ))}
        </ul>
    )
}

export default Cards;