

export const getPokemons = async (name, tipo, naturaleza) => {
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
                naturaleza: pokemon.naturaleza
              }));
    
            return pokemons;
    }
    
    
   