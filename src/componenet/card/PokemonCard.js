import React from 'react';
import "./style.css";
const imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const PokemonCard=(props)=>{
    return(
        <div className="pokemon-card" onClick={()=>{props.onClick(props.id)}}>
        <img src={`${imageUrl}${props.id}.png`} className="pokemon-card-img"/>
        <h3>{props.name}</h3>
        </div>
    )
}
export default PokemonCard;