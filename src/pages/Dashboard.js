import React from 'react';
import PokemonCard from '../componenet/card/PokemonCard';
import './style.css';
class Dashboard extends React.Component {
    state={
        data:[]
    }
    componentDidMount() {
        this.fetchPokemons();
    }

    extractIdFromUrl = (url) => {
        const arrSet=url.split("/");
        return arrSet[6];    
    }

    fetchPokemons = () =>{
        const url= "https://pokeapi.co/api/v2/pokemon/?limit=500";
        
        const configuration={
            method:'GET',
            header:{"accept-type":"application/json"},
            //body:{}
        }
        fetch(url,configuration)
        .then((response) =>{return response.json()})
        .then((original) => {
            const newData=original.results.map ((item)=>{
                return{
                    ...item,id:this.extractIdFromUrl(item.url)
                }
            });
            console.log(newData);
            this.setState({data:newData});
        })
        .catch((error) =>{console.log(error);})
    }

    onPokemonCardClick = (id) =>{
     
            this.props.history.push("/details/"+ id)
    }

    render(){
        return(
            <div>
            <h1  style={{textAlign: 'center'}}><u>POKEDEX</u></h1>
            <div className="dashboard">    
            {
            this.state.data.map((item)=>{
                return <PokemonCard name={item.name} id={item.id} onClick={this.onPokemonCardClick}/>
            })
            }
            </div>
            </div>
        )
    }
}

export default Dashboard;