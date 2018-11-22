const argv = require('yargs')
    .command('listar', 'Imprime la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors/safe');

let comando = argv._[0];
//console.log(argv.base, argv.listar);
//console.log(argv);
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.listar)
            .then(tablaCompleta => console.log(colors.green(tablaCompleta)))
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.green))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');

}