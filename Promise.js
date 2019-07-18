const usuarios = [
    { id: 1, nombre: 'BOris', profesion_id: 2 },
    { id: 2, nombre: 'alberto', profesion_id: 1 },
    { id: 3, nombre: 'julio', profesion_id: 1 },
];

const profesion = {
    1: 'programador',
    2: 'diseñador'
};

function getUsuarios() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(usuarios)
        }, 2000);
    });
}

function getUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(usuarios.filter((usuarios) => usuarios.id === id)[0])
        }, 2000);
    });
}

function getProfesion(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(profesion[id])
        }, 2000);
    });
}

//ejecutamos las promesas una a una
// getUsuarios()
//     .then((usuarios) => getUsuario(usuarios[0].id))
//     .then((usuario) => getProfesion(usuario.profesion_id))
//     .then((profesion) => console.log('la profesion de boris es:', profesion))


//ejecutamos promesas en simultaneo, imprime hasta q todas las promesas se resuelvan
Promise.all([getProfesion(1), getProfesion(2)])
    .then((res) => console.log(res))