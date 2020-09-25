const express = require('express')

const routers = express.Router()


const PokemonController = require('./controllers/PokemonController')


routers.get('/pokemons', PokemonController.list)
routers.get('/pokemons/:id', PokemonController.show)
routers.post('/pokemons/create', PokemonController.create)
routers.put('/pokemons/update/:id', PokemonController.update)
routers.delete('/pokemons/delete/:id', PokemonController.delete)
routers.get('/pokemons/s/search', PokemonController.searchFilterByName)


module.exports = routers