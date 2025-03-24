

export const getPokemons = async () => {
    const res = await fetch('http://localhost:3000/pokemon/pokemon', {
            method: 'GET',
            headers: {
                'content-type': 'Application/json'
            },
          
            
        })
            const result = await res.json()
            const pokemons = result.map(pokemon => ({
                name: pokemon.name,
                tipo: pokemon.tipo,
                naturaleza: pokemon.naturaleza,
                _id:pokemon._id
              }));
    
            return pokemons;
    }
    
    
   // falta VER pokemons al equipo de cada user
   //GET TEAM hace referencia al endpoint de muestra los pokemons x el ID a traves del id que tenga cada user en su perfil

   export const getTeamPokemon = async (pokemonsTeam) => {
    const token = localStorage.getItem("token");

    const res = await fetch(`http://localhost:3000/users/${idUser}/team`, {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({pokemonsTeam})
    });
    const pokemons = await res.json();
    return pokemons;
}