import React from "react";

const JokeCard = props => {
    return (
        <div>
            {props.jokes.map(jokes => {
                return (
                    <div key={jokes.id}>
                        <h2>{jokes.joke}</h2>
                    </div> 
                )
            })}
        </div>
    )
}



export default JokeCard;