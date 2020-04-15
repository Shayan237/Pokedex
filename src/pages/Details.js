import React from 'react';
import Dashboard from './Dashboard';
import './style.css';
//const detailUrl ="https://pokeapi.co/api/v2/pokemon/";
class Details extends React.Component {

    state={
        data:''
    }
    componentDidMount() {
        this.fetchDetails();
    }

    fetchDetails=()=>{
        const detailUrl ="https://pokeapi.co/api/v2/pokemon/"+this.props.match.params.id+"/";
        const configuration={
            method:'GET',
            header:{"accept-type":"application/json"},
            //body:{}
        }
        fetch(detailUrl,configuration)
        .then((response) =>{return response.json()})
        .then((original) => {
            this.setState({data:original});
        })
        .catch((error) =>{console.log(error);})
    }

    render()
    {console.log(this.state.data)

        console.log(this.props)
        return(
            <div>
                <h1  style={{textAlign: 'center' }} className="heading"><u>POKEMON DETAILS</u></h1>
            
            <div className="pokemon-details">
                
            <div className="poke-img">
            <img src={`${"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"}${this.props.match.params.id}.png`} className="pokemon-card-img2"/>
            </div>
            <div className="poke-details">   
            {   this.state.data !=="" ?
                <div>
                <h1 className="heading-name">Name:</h1>
                <h2 className="main-name"> { this.state.data.name} </h2>
                <h1 className="heading-name">Height:</h1>
                <h2 className="main-name"> { this.state.data.height*10} Cm </h2>
                <h1 className="heading-name">Weight:</h1>
                <h2 className="main-name"> {this.state.data.weight/10} KG</h2>
                <h1 className="heading-name">Abilities: </h1>
                {this.state.data.abilities.map((item)=>{
                    return <h2 className="main-name"><li>{item.ability.name}</li></h2>    
                })}
               </div>
            
            
            :<h1> Loading...</h1>
            } 
            </div>      
            </div>
            </div>
        )
    }
}

export default Details;