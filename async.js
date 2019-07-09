const fetch = require('node-fetch');

async function getNombre(username){
    const url       = `https://api.github.com/users/${username}`
    const respuesta = await fetch(url);
    const json      = await respuesta.json();
    return json.bio;// retorna una promesa
}

getNombre('batego').then((name) => console.log(name));//recibo una promesa ".then((name) => ..code)"