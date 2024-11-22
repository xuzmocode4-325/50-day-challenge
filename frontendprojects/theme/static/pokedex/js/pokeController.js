const pokeContainter = document.getElementById('poke-container')
const pokemonCount =  180


const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF&DE',
    water: '#DEF3FD',
    ground: '#F4E7DA',
    rock: '#D5D5D4',
    fairy: '#FCEAFF',
    poison: '#98D7A5',
    bug: '#F8D5A3',
    dragon: '#97b3E6',
    psychic: '#EAEDA1',
    flying: '#E6E0D4',
    normal: '#F5F5F5'
}

const mainTypes = Object.keys(colors)
console.log(mainTypes)

const fetchPokemons = async () => {
    for(let i = 1; i <= pokemonCount; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async(id) =>  {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
}

const toTitleCase = (input) => input && input.length > 1 ? input[0].toUpperCase() + input.slice(1) : input[0].toUpperCase() 

const createPokemonCard = (pm) => {
    const pokemonEl = document.createElement('div')
   

    const nameToTitle = toTitleCase(pm.name)

    const id = pm.id.toString().padStart(3, '0')

    const pokeType = pm.types.map(type => type.type.name)
    const type = mainTypes.find(type => pokeType.indexOf(type) > -1) 

    const typeToTitle = toTitleCase(type)

    const color = colors[type].toLowerCase()

    pokemonEl.classList.add(
        'rounded-md', 'shadow-sm', 'text-center', 
        'shadow-black', 'm-3', 'p-5',
    )

    pokemonEl.style.backgroundColor = color

    const pokemonInnerHTML = `
    <div id="img-container" class="rounded-full  bg-white/60 w-32 h-32">
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" alt="">
    </div>
    <div id="info" class="mt-5">
        <span id="number" class="bg-black/10 py-2 px-3 rounded-lg">#${id}</span>
        <h5 id="name" class="mb-2 mt-3">${nameToTitle}</h5>
        <small id="type">Type:
            <span>${typeToTitle}</span>
        </small>
    </div>
    `

    pokemonEl.innerHTML = pokemonInnerHTML
    pokeContainter.appendChild(pokemonEl)
}

fetchPokemons() 