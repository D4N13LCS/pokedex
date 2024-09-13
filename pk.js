pokeimg = document.querySelector('div > img');
pokeid = document.getElementById('ipoke');
pokebusca = document.getElementById('pokebusca');
pokename = document.getElementById('pokename');
pokeweight = document.getElementById('pokeweight');
btn_pokebusca = document.querySelector('#btn_pokebusca');
setaEsq = document.querySelectorAll('span')[0];
setaDir = document.querySelectorAll('span')[1];
div_poke = document.querySelector('#showpk > div');
showpk = document.querySelector('#showpk');

function mudar_fundo(valor){
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${valor}/`, {
        method: 'GET'
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        if(data.color.name == 'yellow' || data.color.name == 'white'){
            showpk.style.color = 'Black';
        }else{
            showpk.style.color = 'white';
        }
        div_poke.style.backgroundColor = data.color.name
        console.log(data)
    })
    .catch((err)=>{
        alert('Deu merda aí Fabrício!')
    })
}

function buscar_pokemon(valor){
    fetch(`https://pokeapi.co/api/v2/pokemon/${valor}/`, {
        method: 'GET'
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
        pokeimg.src = data.sprites.front_default
        console.log(data.abilities[0].ability.name)
        pokeid.value = data.id
        pokename.value = data.name
        pokeweight.value = data.weight
        mudar_fundo(valor)
    })
}

btn_pokebusca.addEventListener('click', (evt)=>{
    buscar_pokemon(pokebusca.value);
})


setaEsq.addEventListener('click', (evt)=>{
    if (pokeid.value == 1){
        buscar_pokemon('1025');
    }else{
        buscar_pokemon(parseInt(pokeid.value) - 1);
    }
    
})

setaDir.addEventListener('click', (evt)=>{
    if (pokeid.value == 1025){
        buscar_pokemon('1');
    }else{
        buscar_pokemon(parseInt(pokeid.value) + 1);
    }
})

buscar_pokemon(parseInt(pokeid.value))