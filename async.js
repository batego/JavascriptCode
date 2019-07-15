const fetch = require('node-fetch');

async function getNombre(username) {
    const url = `https://api.github.com/users/${username}`
    const respuesta = await fetch(url);
    const json = await respuesta.json();

    if (respuesta.status != 200)
        throw Error('El usuario no existe');//verificamos el usuario y lanzamos la exception

    return json.bio;// retorna una promesa
}

(async function () {
    try {
        const nombre = await getNombre('batego');
        console.log(nombre);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
})()//invocamos una funcion anonima para que ejecute getNombre()


//procesamos la promesa
// getNombre('batego')
// .then((name) => console.log(name))
// .catch((e) => console.log(`Error: ${e}`));//recibo una promesa ".then((name) => ..code)" y capturo la exception