(function () {
    
    // function activar(params: string, momento?: string,  objeto: string = 'batiseñal') {
    //     if (momento) {
    //         console.log(` ${  params } activo la ${ objeto } en la ${ momento}`);
    //     }           
        
    // }

    // activar('gordon','tarde')


    // const miFunction = (a: string) => a.toLocaleUpperCase()-;
    // const miFunction = (a: string) =>  { return a.toLocaleUpperCase() }; 

    // const operation = (a: number, b: number) => a + b;


    // console.log(miFunction('Dereck'));
    // console.log(operation(20,1786));

    // const hulk = {
    //     nombre: 'hulk',
    //     smash(){
            
    //         setTimeout( ()=>{
    //             console.log(`${ this.nombre} smash`);
    //         }, 2000);

    //     }
    // }

    // hulk.smash();


    // --------------DESESTRUCTURACION DE OBJETOS --------------

    // const avenger = {
    //     nombre: 'Steve',
    //     clave: 'Captain America',
    //     poder: 'Droga'
    // }

    // const { nombre, clave, poder } = avenger;

    // console.log(` nombre: ${ nombre }, Clave: ${ clave }, Poder: ${ poder } `);
    
    // const extraer = ( { nombre, clave, poder }: any) =>{
    //     console.log(` nombre: ${ nombre }, Clave: ${ clave }, Poder: ${ poder } `);        
    // }

    // extraer(avenger);

    // // ---------------- DESESTRUCTURACION DE ARREGLO -----------------

    // const marvel: string[] = ['Thor', 'Spiderman', 'Ironman'];
    // const [ uno, dos, tres ] = marvel;

    // console.log(uno);
    // console.log(dos);
    // console.log(tres);


    //  ----------------PROMESAS--------------

    // console.log('Inicio');

    // const prom = new Promise((resolve, reject) => {
    //     setTimeout(() =>{
    //         reject('se termino el Timeout');
    //     }, 2000);

    // });

    // prom.
    // then(mensaje =>  console.log('fin'))
    // .catch(err => console.warn(err));

    // console.log('fin');

    // -------------------------------------------

    const retirarDinero = (montoRetirar: number): Promise<number> => {
        let fondos = 1000;

        return new Promise((res, rej) => {
            if (montoRetirar > fondos) {
                rej('Fondos insuficientes');
            } else {
                fondos -= montoRetirar;
                res(fondos)
            }
        });
    };

    retirarDinero(1600)
    .then(montoActual => console.log(`Disponible ${ montoActual }`))
    .catch(err => console.warn(err));

})();